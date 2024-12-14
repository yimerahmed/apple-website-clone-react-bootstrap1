const express = require("express");
const fs = require("fs");
const multer = require("multer");
const mysql = require("mysql2");
const path = require("path");
const cors = require("cors");
const fileupload=require('express-fileupload');


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



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "iphoneImages"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });



app.use("./iphoneImages",express.static(path.join(__dirname, "iphoneImages"), {
    setHeaders: (res) => {
      res.set("Cache-Control", "no-store");
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/upload", upload.single("image"), (req, res) => {
  const { productName, version } = req.body; 
  const imageFile = req.file; 

  
  const image_url = imageFile ? `http://localhost:700/iphoneImages/${imageFile.filename}`: null;

  const productImage = imageFile ? `iphoneImages/${imageFile.filename}` : null;

  
  let insertProduct = `INSERT INTO Product_name(ProductName, Version, ProductImage) VALUES(?, ?, ?)`;

 
  mysqlConnection.query(insertProduct,[productName, version, productImage],(err, result) => {
      if (err) {
        console.error("Error inserting product:", err);
        return res.status(500).send("Error inserting product");
      }
      res.json({ message: "Product inserted", id: result.insertId });
    }
  );
});


app.get("/jsonget", (req, res) => {
  const sql = `SELECT * FROM Product_name`;
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
