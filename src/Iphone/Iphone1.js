import React, { useEffect, useState } from "react";

function Iphone1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:700/jsonget")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setData(result.items); // Extract 'items' from the result
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="container-fluid ROWIMAGES">
        <div className="container">
          <div className="d-flex flex-row justify-content-between align-items-center mb-3 mt-3 rowimage">
            {data?.map((item,index) => (
                <div className="col-sm-12 col-md-4 col-lg rowElement" key={index}>
                  <div> <a href="#"><img src={item.ProductImage} alt={item.ProductImage} /></a>
                  </div>
                  <div>
                    <p>{item.ProductName}</p>
                    {item.Version === "New" && <p className="red">New</p>}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Iphone1;
