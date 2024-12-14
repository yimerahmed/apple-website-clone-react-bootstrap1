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
  user: "iphone",
  password: "iphone",
  database: "iphone",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Configure storage for images
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "iphoneImages");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Initialize Multer
const upload = multer({ storage: imageStorage });

// Serve static images
app.use(
  "/iphoneImages",
  express.static(path.join(__dirname, "iphoneImages"), {
    setHeaders: (res) => {
      res.set("Cache-Control", "no-store");
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/install", (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS Iphone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ImageURL VARCHAR(255) NOT NULL,
    IphoneName VARCHAR(255),
    IphoneDescription VARCHAR(512) NOT NULL,
    IphonePrice VARCHAR(512) NOT NULL,
    LearnMoreLink VARCHAR(512) NOT NULL,
    BuyLink VARCHAR(512) NOT NULL,
    isNew TINYINT(1),
    Product_ID INT,
    FOREIGN KEY (Product_ID) REFERENCES Product_name(Product_ID)
  );`; 

  mysqlConnection.query(sql, (error) => {
    if (error) {
      return res
        .status(500)
        .send("Error creating iphone table: " + error.message);
    }
    console.log("iphone table created");
    res.send("Table 'Iphone' created successfully!");
  });
});

////////////////////////INSERTING

app.post("/submit-product", upload.single("image"), (req, res) => {
const { image, name, description, price, learnMoreLink, buyLink, isNew } =req.body;

 

  const sql = `INSERT INTO Iphone (ImageURL, IphoneName, IphoneDescription, IphonePrice, LearnMoreLink, BuyLink, isNew) 
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [image,name,description,price,learnMoreLink,buyLink,isNew];

  mysqlConnection.query(sql, values, (error) => {
    if (error) {
      return res.status(500).send("Error inserting product: " + error.message);
    }
    console.log("Product inserted successfully");
    res.send("Product added successfully!");
  });
});


app.get("/jsonget", (req, res) => {
  const sql = `SELECT * FROM Iphone`;
  mysqlConnection.query(sql, (err, products) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).send("Error fetching products");
    }
    res.json({ items: products });
  });
});

// Start the server
app.listen(700, () => {
  console.log("Server is running on http://localhost:700");
});
