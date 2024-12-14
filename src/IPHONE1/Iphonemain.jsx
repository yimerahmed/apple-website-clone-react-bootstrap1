import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FourO4 from "./NAV/FourO4";
const Iphonemain = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/jsonget")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setData(result.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  let order = 1;
// if(phone.length){ 
  return (
    <div className="container">
      <div>
        <h1 className="text-center">iPhone</h1>
      </div>
      {data?.map((item, index) => {
        const id = item.productId;
        const productPage = "/iphone/" + id;
        const name = item.ProductName;
        const feature = item.feature;
        const price = item.price;

        let order1 = 1;
        let order2 = 2;
        if (order !== 1) {
          order1 = 2;
          order2 = 1;
          order--;
        } else {
          order++;
        }

        return (
          <div key={id} className={`d-flex justify-content-between mx-auto`}>
            <div className={`col-sm-12 col-md-6 mx-auto order-${order1}`}>
              <img
                src={`http://localhost:7000/uploads/${item.productImage}`}
                alt={name}
              />
            </div>
            <br />
            <div
              className={`col-sm-12 col-md-6 mx-auto p-3 mt-5 order-${order2}`}
            >
              <p className="red">New</p>
              <h5>{name}</h5>
              <p>{feature}</p>
              <p>{price}</p>
              <br />
              <div className="learnMore">
                <Link to={productPage}>Learn more</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
// }
// else {
// return (<FourO4/>)
//   }
};

export default Iphonemain;
