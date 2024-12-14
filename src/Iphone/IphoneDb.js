const express = require("express");
const fs = require("fs");
const multer = require("multer");
const mysql = require("mysql2");
const path = require("path");
const cors = require("cors");

const app = express();


// Database connection
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "iphone", 
  password: "iphone", 
  database: "iphone"
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error("Error connecting to MySQL database:", err); // Changed this line
  } else {
    console.log("Connected to MySQL database");
  }
});

// Configure storage for images
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'iphoneImages'); // Folder for images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Customize filename
    }
});
// Configure storage for videos
const videoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "iphoneImages"); // Folder for videos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Customize filename
  },
});

// Initialize Multer
const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 }, // Set limit to 10 MB (adjust as needed)
});




app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); // For parsing application/json

//Creating database table

app.get("/install", (req, res) => {
  let nameTable = `CREATE TABLE if not exists Product(
Product_ID int auto_increment,
ProductName varchar(255) not null,
Version varchar(255) not null,
VideoTitle varchar(255) not null,
Video varchar(255) not null,
ProductImage varchar(255) not null,
PRIMARY KEY(Product_ID)
)`;
  mysqlConnection.query(nameTable, (err, result, field) => {
    if (err) {
      console.log("Error");
    }
  });
  //   res.end("Table Created");

  let descriptionTable = `CREATE TABLE if not exists Description(
descriptionID int auto_increment,
Product_ID int not null,
Title varchar(255) not null,
Description VARCHAR(255) NOT NULL,
DetailDescription varchar(255) not null,
PRIMARY KEY(descriptionID),
FOREIGN KEY (Product_ID) REFERENCES Product(Product_ID)
)`;

  mysqlConnection.query(descriptionTable, (err, result, field) => {
    if (err) {
      console.log("Error");
    }
    // res.end("table created");
  });

  let priceTable = `CREATE TABLE if not exists Price(
PriceID int auto_increment,
Product_ID int not null,
Imagefunction varchar(255) not null,
Priceindicator varchar(255) not null,
Detail varchar(255) not null,
Orderproduct varchar(255) not null,
PRIMARY KEY(PriceID),
FOREIGN KEY (Product_ID) REFERENCES Product(Product_ID)
)`;

  mysqlConnection.query(priceTable, (err, result, field) => {
    if (err) {
      console.log("Error");
    }
    // res.end("table created");
  });
  res.end("table created");
}); 

app.post(
  "/upload",
  upload.fields([{ name: "image" }, { name: "video" }]),
  (req, res) => {
    const {
      title,
      productName,
      version,
      description,
      detailDescription,
      imageFunction,
      price,
      details,
      order,
    } = req.body;

    // Check if files are uploaded
    const imageFile = req.files["image"] ? req.files["image"][0] : null;
    const videoFile = req.files["video"] ? req.files["video"][0] : null;

    const image_url = imageFile ? `iphoneImages/${imageFile.filename}` : null; // Image URL
    const video_url = videoFile ? `iphoneImages/${videoFile.filename}` : null; // Video URL

    let insertProduct = `INSERT INTO Product(ProductName, Version, ProductImage, VideoTitle, Video) VALUES('${productName}', '${version}', '${image_url}', '${
      videoFile?.originalname || ""
    }', '${video_url || ""}')`;

    mysqlConnection.query(insertProduct, (err, result) => {
      if (err) {
        console.error("Error inserting product:", err);
        return res.status(500).send("Error inserting product");
      }
      console.log("Product inserted");

      const addedID = result.insertId;

      let DescriptionValue = `INSERT INTO Description(Product_ID, Title, Description, DetailDescription) VALUES('${addedID}', '${title}', '${description}', '${detailDescription}')`;

      mysqlConnection.query(DescriptionValue, (err, result) => {
        if (err) {
          console.error("Error inserting description:", err);
          return res.status(500).send("Error inserting description");
        }
        console.log("Description inserted");

        let priceValue = `INSERT INTO Price(Product_ID, Imagefunction, Priceindicator, Detail, Orderproduct) VALUES('${addedID}', '${imageFunction}', '${price}', '${details}', '${order}')`;

        mysqlConnection.query(priceValue, (err, result) => {
          if (err) {
            console.error("Error inserting price:", err);
            return res.status(500).send("Error inserting price");
          }
          console.log("Price inserted");
          res.send("Data inserted successfully!");
        });
      });
    });
  }
);



app.get("/getjson", (req, res) => {
  const sql = `
        SELECT 
            Product.ProductName AS product_name,
            Product.Version,
            Product.ProductImage,
            Product.VideoTitle,
            Product.Video,
            Description.Title,
            Description.Description,
            Description.DetailDescription,
            Price.Imagefunction,
            Price.Priceindicator,
            Price.Detail,
            Price.Orderproduct
        FROM 
            Product
        JOIN 
            Description ON Product.Product_ID = Description.Product_ID
        JOIN 
            Price ON Product.Product_ID = Price.Product_ID
    `;

  mysqlConnection.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});




// Start the server
app.listen(700, () => {
  console.log('Server is running on http://localhost port 700');
});
