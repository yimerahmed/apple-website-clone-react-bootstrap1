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

// Ensure the directory exists
const uploadDir = "iphoneImages";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Use a single multer configuration
const upload = multer({
  storage,
  limits: { fileSize: Infinity },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/") && file.fieldname === "imageFile") {
      return cb(new Error("Please upload an image"));
    }
    cb(null, true);
  },
}).fields([
  { name: "videoFile", maxCount: 1 },
  { name: "imageFile", maxCount: 1 },
]);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});



app.get("/createVideoTable", (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS video (
    id INT AUTO_INCREMENT PRIMARY KEY,
    video_title VARCHAR(255) NOT NULL,
    video_subtitle VARCHAR(255),
    video_file_path VARCHAR(512) NOT NULL,
    Product_ID INT,
    FOREIGN KEY (Product_ID) REFERENCES Product_name(Product_ID)
  );`;

  mysqlConnection.query(sql, (error) => {
    if (error) {
      return res
        .status(500)
        .send("Error creating video table: " + error.message);
    }
    res.send("Table 'video' created successfully!");
  });
});

app.get("/createImageTable", (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS image (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_title VARCHAR(255) NOT NULL,
    image_description TEXT,
    image_file_path VARCHAR(512) NOT NULL,
    general_description TEXT,
    Product_ID INT,
    FOREIGN KEY (Product_ID) REFERENCES Product_name(Product_ID)
  );`;

  mysqlConnection.query(sql, (error) => {
    if (error) {
      return res
        .status(500)
        .send("Error creating image table: " + error.message);
    }
    res.send("Table 'image' created successfully!");
  });
});

async function fetchProductIds() {
  const sql = `SELECT Product_ID FROM Product_name`;
  return new Promise((resolve, reject) => {
    mysqlConnection.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results.map((row) => row.Product_ID));
    });
  });
}

app.use("/iphoneImages", express.static(path.join(__dirname, uploadDir)));

app.post("/submit", upload, async (req, res) => {
  const {
    videoTitle,
    videoSubtitle,
    imageTitle,
    imageDescription,
    generalDescription,
  } = req.body;

  const videoFilePath = req.files["videoFile"]
    ? req.files["videoFile"][0].path
    : null;
  const imageFilePath = req.files["imageFile"]
    ? req.files["imageFile"][0].path
    : null;

  try {
    const productIds = await fetchProductIds();
    const productId = productIds.length > 0 ? productIds[0] : null;

    // Insert into video table
    if (videoFilePath) {
      const videoSql = `INSERT INTO video (video_title, video_subtitle, video_file_path, Product_ID) VALUES (?, ?, ?, ?)`;
      const videoValues = [videoTitle, videoSubtitle, videoFilePath, productId];

      await new Promise((resolve, reject) => {
        mysqlConnection.query(videoSql, videoValues, (error) => {
          if (error)
            return reject(
              new Error("Error inserting video data: " + error.message)
            );
          resolve();
        });
      });
      console.log("Video data inserted successfully");
    }

    // Insert into image table
    if (imageFilePath) {
      const imageSql = `INSERT INTO image (image_title, image_description, image_file_path, general_description, Product_ID) VALUES (?, ?, ?, ?, ?)`;
      const imageValues = [
        imageTitle,
        imageDescription,
        imageFilePath,
        generalDescription,
        productId,
      ];

      await new Promise((resolve, reject) => {
        mysqlConnection.query(imageSql, imageValues, (error) => {
          if (error)
            return reject(
              new Error("Error inserting image data: " + error.message)
            );
          resolve();
        });
      });
      console.log("Image data inserted successfully");
    }

    res.send("Data submitted successfully!");
  } catch (error) {
    console.error("Error processing submission:", error);
    res.status(500).send("Error processing submission: " + error.message);
  }
});

app.get("/jsonget", (req, res) => {
  const sql = `SELECT * FROM video`;
  mysqlConnection.query(sql, (err, video) => {
    if (err) {
      console.error("Error fetching videos:", err);
      return res.status(500).send("Error fetching videos");
    }
    res.json({ items: video });
  });
});

app.get("/jsonimage", (req, res) => {
  const sql = `SELECT * FROM image`;
  mysqlConnection.query(sql, (err, image) => {
    if (err) {
      console.error("Error fetching images:", err);
      return res.status(500).send("Error fetching images");
    }
    res.json({ items: image });
  });
});

// Start the server
app.listen(700, () => {
  console.log("Server is running on http://localhost:700");
});
