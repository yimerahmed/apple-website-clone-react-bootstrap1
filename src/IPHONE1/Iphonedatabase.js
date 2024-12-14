const express = require("express");
const fs = require("fs");
const multer = require("multer");
const mysql = require("mysql2");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// Database connection
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "secondiphone",
  password: "secondiphone",
  database: "secondiphone",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});



const uploads = path.join(__dirname, "../../uploads");
app.use("/uploads",express.static(uploads, {
    setHeaders: (res) => {
      res.set("Cache-Control", "no-store");
    },
  })
);
// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploads); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Serve static files from the uploads directory
// app.use(
//   "/uploads",
//   express.static(path.join(__dirname, "../../uploads"), {
//     setHeaders: (res) => {
//       res.set("Cache-Control", "no-store");
//     },
//   })
// );



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/install", (req, res) => {
  const nameTable = `CREATE TABLE IF NOT EXISTS ProductName (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Product_name VARCHAR(255) NOT NULL,
    feature VARCHAR(255) NOT NULL,
    image VARCHAR(512) NOT NULL,
    price VARCHAR(512) NOT NULL 
  );`;

  mysqlConnection.query(nameTable, (error) => {
    if (error) {
      return res
        .status(500)
        .send("Error creating ProductName table: " + error.message);
    }

    const descriptionTable = `CREATE TABLE IF NOT EXISTS ProductDescription (
      description_id INT AUTO_INCREMENT PRIMARY KEY,
      description VARCHAR(255) NOT NULL,
      description_image VARCHAR(255) NOT NULL,
      sub_description VARCHAR(512) NOT NULL,
      subdescription_image VARCHAR(512) NOT NULL,
      id INT,
      FOREIGN KEY (id) REFERENCES ProductName(id)
    );`;

    mysqlConnection.query(descriptionTable, (error) => {
      if (error) {
        return res
          .status(500)
          .send("Error creating ProductDescription table: " + error.message);
      }
      res.send("Tables created successfully!");
    });
  });
});

app.post(
  "/submit",
  upload.fields([
    { name: "product-image", maxCount: 1 },
    { name: "description-image", maxCount: 1 },
    { name: "detail-description-image", maxCount: 1 },
  ]),
  (req, res) => {
    const {
      name,
      feature,
      price,
      "main-description": mainDescription,
      "detail-description": detailDescription,
    } = req.body;

    const productImage = req.files["product-image"]
      ? req.files["product-image"][0].filename
      : null;
    const descriptionImage = req.files["description-image"]
      ? req.files["description-image"][0].filename
      : null;
    const detailDescriptionImage = req.files["detail-description-image"]
      ? req.files["detail-description-image"][0].filename
      : null;

    let insertProduct = `INSERT INTO ProductName (Product_name, feature, image, price) VALUES (?, ?, ?, ?)`;
    mysqlConnection.query(
      insertProduct,
      [name, feature, productImage, price],
      (err, result) => {
        if (err) {
          console.error("Error inserting product:", err);
          return res.status(500).send("Error inserting product");
        }

        const productId = result.insertId;
        let insertDescription = `INSERT INTO ProductDescription (description, description_image, sub_description, subdescription_image, id) VALUES (?, ?, ?, ?, ?)`;
        mysqlConnection.query(
          insertDescription,
          [
            mainDescription,
            descriptionImage,
            detailDescription,
            detailDescriptionImage,
            productId,
          ],
          (err, result) => {
            if (err) {
              console.error("Error inserting product description:", err);
              return res
                .status(500)
                .send("Error inserting product description");
            }
            res.json({ message: "Product inserted successfully", productId });
          }
        );
      }
    );
  }
);






app.get("/jsonget", (req, res) => {
  const sql = `SELECT 
    ProductName.id AS productId,
    ProductName.Product_name AS ProductName,
    ProductName.feature,
    ProductName.image AS productImage,
    ProductName.price,
    ProductDescription.description,
    ProductDescription.description_image AS descriptionImage,
    ProductDescription.sub_description,
    ProductDescription.subdescription_image AS subDescriptionImage
  FROM 
    ProductName  JOIN ProductDescription ON  ProductDescription.id=ProductName.id `;
  mysqlConnection.query(sql, (err, products) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).send("Error fetching products");
    }
    res.json({ items: products });
  });
});

// Start the server
app.listen(7000, () => {
  console.log("Server is running on http://localhost:7000");
});
