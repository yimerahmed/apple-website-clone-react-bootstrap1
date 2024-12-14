import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { productId } = useParams(); 
console.log("Product ID:", productId);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/jsonget")
      .then((response) => response.json() )
      .then((result) => {
        const phone = result.items; 
        const singlePhone = phone.filter(
          (product) => product.productId === Number(productId )
        ); 
        setData(singlePhone); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [productId]);

  return (
    <div className="container">
      <div>
        <h1 className="text-center">iPhone</h1>
      </div>
      {data?.map((item) => {
        
        const id = item.productId;
        const description = item.description; 
        const subDescription = item.sub_description; 
        const descriptionImage = item.descriptionImage; 
        const subDescriptionImage = item.subDescriptionImage; 

        return (
          <div key={id} className="d-flex justify-content-between mx-auto">
            <div className="col-sm-12 col-md-6 mx-auto m-2">
              <img
                className="mt-5"
                src={`http://localhost:7000/uploads/${descriptionImage}`}
                alt={description}
              />
              <div>
                <p className="text-center">{description}</p>
              </div>
            </div>
            <br />
            <div className="col-sm-12 col-md-6 mx-auto">
              <img
                className="mt-5" src={`http://localhost:7000/uploads/${subDescriptionImage}`}
                alt={subDescription}
              />
              <div>
                <p className="text-center">{subDescription}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
