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
  const sql = `CREATE TABLE IF NOT EXISTS Camera (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ImageURL VARCHAR(255) NOT NULL,
    Title VARCHAR(255),
    GPUURL VARCHAR(255) NOT NULL,
    GPU VARCHAR(512) NOT NULL,
    CameraUrl VARCHAR(512) NOT NULL,
    CameraFunction VARCHAR(512) NOT NULL,
    CameraSystem VARCHAR(512) NOT NULL,
    CameraSystemDetail VARCHAR(512) NOT NULL,
    Product_ID INT,
    FOREIGN KEY (Product_ID) REFERENCES Product_name(Product_ID)
  );`;

  mysqlConnection.query(sql, (error) => {
    if (error) {
      return res
        .status(500)
        .send("Error creating camera table: " + error.message);
    }
    console.log("Camera table created");
    res.send("Table 'camera' created successfully!");
  });
});

app.post("/submit", (req, res) => {
  const {
    title,
    imageSrc, // Default to an empty string if undefined
    gpuURL,
    gpu,
    cameraUrl,
    cameraFunction,
    cameraSystem,
    cameraSystemDetail,
    productID ,
    featureImageSrc, 
    featureDescription
  } = req.body;
  
  const cameraSql = `INSERT INTO Camera (
    ImageURL, Title, GPUURL, GPU, CameraUrl, CameraFunction, CameraSystem, CameraSystemDetail, Product_ID
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const cameraValues = [imageSrc, title, gpuURL, gpu, cameraUrl, cameraFunction, cameraSystem, cameraSystemDetail, productID];

  mysqlConnection.query(cameraSql, cameraValues, (error) => {
    if (error) {
      console.error("Error inserting into Camera table:", error.message);
      return res.status(500).send("Error inserting data: " + error.message);
    }

    console.log("Data inserted successfully into Camera table");
    res.send("Data inserted successfully!");
  });
});


// Fetch data from Camera table
app.get("/jsonget", (req, res) => {
  const sql = `SELECT * FROM Camera`;
  mysqlConnection.query(sql, (err, products) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).send("Error fetching products");
    }
    res.json({ items: products });
  });
});


app.listen(600, () => {
  console.log("Server is running on http://localhost:700");
});



////////////////////////// for Iphone 5/////////////////////////////////////


app.get("/createTable", (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS Model (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    buttonText VARCHAR(255) NOT NULL,
    Product_ID INT,
    FOREIGN KEY (Product_ID) REFERENCES Product_name(Product_ID)
  );`;

  mysqlConnection.query(sql, (error) => {
    if (error) {
      return res
        .status(500)
        .send("Error creating model table: " + error.message);
    }
    console.log("Camera table created");
    res.send("Table 'model' created successfully!");
  });
});

app.post("/insert", (req, res) => {
  const {title, message } = req.body;

  const modelSql = `INSERT INTO Model ( Title, buttonText, Product_ID) VALUES (?, ?, ?)`;

  const modelValues = [title, message, productID ];

  mysqlConnection.query(modelSql, modelValues, (error) => {
    if (error) {
      console.error("Error inserting into model table:", error.message);
      return res.status(500).send("Error inserting data: " + error.message);
    }

    console.log("Data inserted successfully into model table");
    res.send("Data inserted successfully!");
  });
});

//////for Model json file yelewim







////////////////////////////for shop component

app.get("/createShopTable", (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS Shop (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Image VARCHAR(255) NOT NULL,
    Title VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL
  );`;

  mysqlConnection.query(sql, (error) => {
    if (error) {
      return res
        .status(500)
        .send("Error creating model table: " + error.message);
    }
    console.log("shop table created");
    res.send("Table 'shop' created successfully!");
  });
});

app.post("/shopDatainsert", upload.single("image"), (req, res) => {
  // Access title and description from req.body
  const title = req.body.title;
  const description = req.body.description;

  // Access the uploaded file's information
  const image = req.file ? req.file.filename : null; 

  // Now insert the data into the database
  const shopSql = `INSERT INTO Shop (Title, Description, Image) VALUES (?, ?, ?)`;
  const shopValues = [title, description, image];

  mysqlConnection.query(shopSql, shopValues, (error) => {
    if (error) {
      console.error("Error inserting into shop table:", error.message);
      return res.status(500).send("Error inserting data: " + error.message);
    }

    console.log("Data inserted successfully into shop table");
    res.send("Data inserted successfully!");
  });
});



app.get("/jsonshop", (req, res) => {
  const sql = `SELECT * FROM Shop`;
  mysqlConnection.query(sql, (err, products) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).send("Error fetching products");
    }
    res.json({ items: products });
  });
});






////// for MAGSAFE AND AIRTAG DATABASE////////////////////////
//////////////////////////////////////////////////////////////

app.get("/createMagsafe", (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS MagSafe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Image VARCHAR(255) NOT NULL,
    Title VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    Link VARCHAR(255) NOT NULL
  );`;

  mysqlConnection.query(sql, (error) => {
    if (error) {
      return res
        .status(500)
        .send("Error creating model table: " + error.message);
    }
    console.log(" table created");
    res.send("Table  created successfully!");
  });

const airtagTable = `CREATE TABLE IF NOT EXISTS AirTag (
    airtagid INT AUTO_INCREMENT PRIMARY KEY,
    Image VARCHAR(255) NOT NULL,
    Title VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    Link VARCHAR(255) NOT NULL,
    id int,
    FOREIGN KEY (id) REFERENCES MagSafe(id)
  );`;

mysqlConnection.query(airtagTable, (error) => {
  if (error) {
    return res.status(500).send("Error creating model table: " + error.message);
  }
  console.log(" table created");
  res.send("Table  created successfully!");
});

});

app.post("/magsafe", upload.array("images"), (req, res) => {
  const { title, description, link } = req.body;
  const imageFiles = req.files.map((file) => file.filename).join(", ");

  
  const magSql = `INSERT INTO MagSafe (Title, Description, Link, Image) VALUES (?, ?, ?, ?)`;

  mysqlConnection.query(
    magSql,
    [title, description, link, imageFiles],
    (error) => {
      if (error) {
        console.error("Error inserting into MagSafe table:", error.message);
        return res.status(500).send("Error inserting data: " + error.message);
      }

      console.log("Data inserted successfully into MagSafe table");
      res.send("Data inserted successfully!");
    }
  );


  const tagSql = `INSERT INTO AirTag (Title, Description, Link, Image) VALUES (?, ?, ?, ?)`;

  mysqlConnection.query(tagSql,[title, description, link, imageFiles],(error) => {
      if (error) {
        console.error("Error inserting into MagSafe table:", error.message);
        return res.status(500).send("Error inserting data: " + error.message);
      }

      console.log("Data inserted successfully into MagSafe table");
      res.send("Data inserted successfully!");
    }
  );
});





app.get("/jsonmag", (req, res) => {
  const sql = `SELECT * FROM MagSafe`;
  mysqlConnection.query(sql, (err, products) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).send("Error fetching products");
    }
    res.json({ items: products });
  });
});



/////////////////////////////HANDBYFACE DATABASE////////////////////////////////
/////////////////////////////HANDBYFACE DATABASE////////////////////////////////
/////////////////////////////HANDBYFACE DATABASE////////////////////////////////



app.get("/MacandWatch", (req, res) => {
  // Create the Mac table
  const mac = `CREATE TABLE IF NOT EXISTS Mac (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Image VARCHAR(255) NOT NULL,
    Title VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL
  );`;

  mysqlConnection.query(mac, (error) => {
    if (error) {
      return res.status(500).send("Error creating Mac table: " + error.message);
    }
    console.log("Mac table created");

    // Create the Watch table
    const watch = `CREATE TABLE IF NOT EXISTS Watch (
      watchid INT AUTO_INCREMENT PRIMARY KEY,
      Image VARCHAR(255) NOT NULL,
      Title VARCHAR(255) NOT NULL,
      Description VARCHAR(255) NOT NULL,
      id INT,
      FOREIGN KEY (id) REFERENCES Mac(id)
    );`;

    mysqlConnection.query(watch, (error) => {
      if (error) {
        return res
          .status(500)
          .send("Error creating Watch table: " + error.message);
      }
      console.log("Watch table created");

      // Create the Airpod table
      const airpod = `CREATE TABLE IF NOT EXISTS Airpod (
        airpodid INT AUTO_INCREMENT PRIMARY KEY,
        Image VARCHAR(255) NOT NULL,
        Title VARCHAR(255) NOT NULL,
        Description VARCHAR(255) NOT NULL,
        id INT,
        FOREIGN KEY (id) REFERENCES Mac(id)
      );`;

      mysqlConnection.query(airpod, (error) => {
        if (error) {
          return res
            .status(500)
            .send("Error creating Airpod table: " + error.message);
        }
        console.log("Airpod table created");
        res.send("All tables created successfully!"); // Send the final response here
      });
    });
  });
});


app.post(
  "/send",
  upload.fields([
    { name: "macImage" },
    { name: "watchImage" },
    { name: "airpodImage" },
  ]),
  (req, res) => {
    const macData = {
      title: req.body.macTitle,
      description: req.body.macDescription,
      image: req.files["macImage"] ? req.files["macImage"][0].filename : null,
    };

    const watchData = {
      title: req.body.watchTitle,
      description: req.body.watchDescription,
      image: req.files["watchImage"]
        ? req.files["watchImage"][0].filename
        : null,
    };

    const airpodData = {
      title: req.body.airpodTitle,
      description: req.body.airpodDescription,
      image: req.files["airpodImage"]
        ? req.files["airpodImage"][0].filename
        : null,
    };

    // Insert into Mac table
    mysqlConnection.query(`INSERT INTO Mac SET ?`, macData, (error) => {
      if (error)
        return res
          .status(500)
          .send("Error inserting into Mac: " + error.message);

      // Insert into Watch table
      mysqlConnection.query(`INSERT INTO Watch SET ?`, watchData, (error) => {
        if (error)
          return res
            .status(500)
            .send("Error inserting into Watch: " + error.message);

        // Insert into Airpod table
        mysqlConnection.query(
          `INSERT INTO Airpod SET ?`,
          airpodData,
          (error) => {
            if (error)
              return res
                .status(500)
                .send("Error inserting into Airpod: " + error.message);

            res.send("Data inserted successfully into all tables!");
          }
        );
      });
    });
  }
);

/////////////////// TO GET JSON FILE OF ALL THIS THREE TABELS 
app.get("/jsonmac", (req, res) => {
  const macSql = `SELECT * FROM Mac`;
  const watchSql = `SELECT * FROM Watch`;
  const airpodSql = `SELECT * FROM Airpod`;

  // Use Promise.all to fetch data from all three tables
  Promise.all([
    new Promise((resolve, reject) => {
      mysqlConnection.query(macSql, (err, macData) => {
        if (err) return reject("Error fetching Mac data: " + err);
        resolve(macData);
      });
    }),
    new Promise((resolve, reject) => {
      mysqlConnection.query(watchSql, (err, watchData) => {
        if (err) return reject("Error fetching Watch data: " + err);
        resolve(watchData);
      });
    }),
    new Promise((resolve, reject) => {
      mysqlConnection.query(airpodSql, (err, airpodData) => {
        if (err) return reject("Error fetching Airpod data: " + err);
        resolve(airpodData);
      });
    }),
  ])
    .then(([macItems, watchItems, airpodItems]) => {
      // Combine the results
      res.json({
        mac: macItems,
        watch: watchItems,
        airpod: airpodItems,
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).send("Error fetching data");
    });
});



///////////////////////Last UL////////////////////////////
///////////////////////Last UL////////////////////////////
app.get("/explore", (req, res) => {
  // Create the ExploreIphone table
  const exploreTable = `CREATE TABLE IF NOT EXISTS ExploreIphone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Explore VARCHAR(255) NOT NULL,
    ShopIphone VARCHAR(255) NOT NULL,
    Service VARCHAR(255) NOT NULL
  );`;

  mysqlConnection.query(exploreTable, (error) => {
    if (error) {
      return res
        .status(500)
        .send("Error creating ExploreIphone table: " + error.message);
    }
    console.log("ExploreIphone table created");
    res.send("ExploreIphone table created successfully!");
  });
});

app.use(express.urlencoded({ extended: true }));


app.use(express.json());


app.post("/toexplore", (req, res) => {
  const { explore, shopIphone, service } = req.body;
  console.table(req.body);

  
  const exploreSql = `INSERT INTO ExploreIphone (Explore, ShopIphone, Service) VALUES ('${explore}', '${shopIphone}', '${service}')`;

  mysqlConnection.query(exploreSql, (error) => {
    if (error) {
      console.error("Error inserting into ExploreIphone table:", error.message);
      return res.status(500).send("Error inserting data: " + error.message);
    }

    console.log("Data inserted successfully into ExploreIphone table");
    res.send("Data inserted successfully!");
  });
});













