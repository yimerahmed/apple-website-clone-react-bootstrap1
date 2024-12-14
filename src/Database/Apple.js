const mysql = require("mysql2");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let mysqlConnection = mysql.createConnection({
  user: "Apple",
  password: "Apple",
  host: "127.0.0.1",
  database: "apple",
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error("Error connecting to MySQL database:", err); // Changed this line
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/install", (req, res) => {
  let giftTable = `CREATE TABLE if not exists Applegift(
Apple_ID int auto_increment,
Amount varchar(255) not null,
Detail varchar(255) not null,
PRIMARY KEY(Apple_ID)
)`;
  mysqlConnection.query(giftTable, (err, result, field) => {
    if (err) {
      console.log("Error");
    }
  });
//   res.end("Table Created");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let storeTable = `CREATE TABLE if not exists Store(
StoreID int auto_increment,
Apple_ID int not null,
Title varchar(255) not null,
image_name VARCHAR(255) NOT NULL,
need varchar(255) not null,
Detail varchar(255) not null,
visit varchar(255) not null,
PRIMARY KEY(StoreID),
FOREIGN KEY (Apple_ID) REFERENCES Applegift(Apple_ID)
)`;

  mysqlConnection.query(storeTable, (err, result, field) => {
    if (err) {
      console.log("Error");
    }
    // res.end("table created");
  });

  let productTable = `CREATE TABLE if not exists Product(
ProductID int auto_increment,
Apple_ID int not null,
Image varchar(255) not null,
ProductName varchar(255) not null,
PRIMARY KEY(ProductID),
FOREIGN KEY (Apple_ID) REFERENCES Applegift(Apple_ID)
)`;
  mysqlConnection.query(productTable, (err, result, field) => {
    if (err) {
      console.log("Error");
    }
    // res.end("table created");
  });


 let advancedTable = `CREATE TABLE if not exists AdvancedTools(
Tools_ID int auto_increment,
Apple_ID int not null,
GiftCard varchar(255) not null,
Product varchar(255) not null,
Price varchar(255) not null,
Image varchar(255) not null,
PRIMARY KEY(Tools_ID),
FOREIGN KEY (Apple_ID) REFERENCES Applegift(Apple_ID)
)`;
  mysqlConnection.query(advancedTable, (err, result, field) => {
    if (err) {
      console.log("Error");
    }
    // res.end("table created");
  });
    
  let advanceTable = `CREATE TABLE if not exists AdvanceTools(
Tools_ID int auto_increment,
Apple_ID int not null,
GiftCard varchar(255) not null,
Product varchar(255) not null,
Price varchar(255) not null,
Image varchar(255) not null,
PRIMARY KEY(Tools_ID),
FOREIGN KEY (Apple_ID) REFERENCES Applegift(Apple_ID)
)`;
  mysqlConnection.query(advanceTable, (err, result, field) => {
    if (err) {
      console.log("Error");
    }
    
  });  
    res.end("table created");
});







app.listen(800, () => {
  console.log("The server is working on port 8100");
});



// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
app.post("/insert", (req, res) => {
  const { first_name, last_name, city, address } = req.body;
  console.table(req.body);
  let insertGift = `INSERT INTO Applegift(Amount,Detail) VALUES('${first_name}','${last_name}')`;

  mysqlConnection.query(insertGift , (err, result, field) => {
    if (err) {
      console.log("Error happened");
    }
    console.log("inserted");
  });
//   /////////////////////////////////////////////////////////////////////////////////////////////
  mysqlConnection.query(
    `SELECT * FROM Applegift WHERE Amount="${first_name}"`,
    (err, row, fields) => {
      //console.log(row);
      let addedID = row[0].Apple_ID;
      console.log(Apple_ID);
      //////
      let storeValue = `INSERT INTO Store(Apple_ID,Title,image_name,need,Detail,visit) VALUES('${addedID}','${address}')`;

      mysqlConnection.query(storeValue , (err, result, field) => {
        if (err) {
          console.log("mistake sertehal");
        }
        console.log(" address value  inserted");
      });

//       ////////////////////////
      let productValue = `INSERT INTO Product(Apple_ID,Image,ProductName) VALUES('${addedID}','${city}')`;

      mysqlConnection.query(productValue, (err, result, field) => {
        if (err) {
          console.log("mistake sertehal");
        }
        console.log("city value inserted");
      });
    }
  );

  res.end("data gebtual");
});

// ////////////////DELETING  DELETE FROM table_name WHERE condition;
// app.delete("/deleteUser", (req, res) => {
//   console.log(req.body);
//   const { identity: personID } = req.body;
//   let removingAddress = `DELETE FROM Address WHERE personID=?`;
//   let removingCity = `DELETE FROM City WHERE personID=?`;
//   let removingName = `DELETE FROM Name WHERE personID=?`;
//   mysqlConnection.query(removingAddress, [personID], (err, result) => {
//     if (err) throw err;
//     console.log("address data deleted");
//     res.send(result);
//   });
//   ////rrrrrrrrrrrrrrrrrrrrrrrrrr

//   mysqlConnection.query(removingCity, [personID], (err, result) => {
//     if (err) throw err;
//     console.log("city data deleted");
//     res.send(result);
//   });
//   ////////////rrrrrrrrrrrrrrrrrrrrrrr

//   mysqlConnection.query(removingName, [personID], (err, result) => {
//     if (err) throw err;
//     console.log("city data deleted");
//     res.send(result);
//   });
//   res.end("data deleted");
// });

// /////////////TO DISPLAY ALL DATA FOR USER/////////////////////////////////////////////////////
// app.get("/forcustomer", (req, res) => {
//   mysqlConnection.query(
//     "SELECT * FROM Name JOIN Address JOIN City ON Name.personID=Address.personID AND Name.personID=City.personID",
//     (err, result, field) => {
//       if (err) throw err;
//       res.send(result);
//     }
//   );
// });
// //////////////////TO display speific id data
// app.get("/usingId", (req, res) => {
//   mysqlConnection.query(
//     "SELECT Name.personID AS ID,Name.First_Name,Address.Address,City.City FROM Name JOIN Address JOIN City ON Name.personID=Address.personID AND Name.personID=City.personID",
//     (err, result, field) => {
//       if (err) throw err;
//       res.send(result);
//     }
//   );
// });
// /////updateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdate

// // UPDATE table_name
// // SET column1 = value1, column2 = value2, ...
// // WHERE condition;
// let updating = `UPDATE City SET City='Nairoby' WHERE PersonID=?`;

// mysqlConnection.query(updating, []);

// app.listen(8100, () => {
//   console.log("The server is working on port 8100");
// });
