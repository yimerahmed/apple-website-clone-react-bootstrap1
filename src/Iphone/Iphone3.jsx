import React, { useEffect, useState } from 'react';

const Iphone3 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:700/jsonget"); 
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

// this is for event handling
document.addEventListener("DOMContentLoaded", function () {
  const productList = document.querySelector(".productList");
  const leftButton = document.querySelector(".LEFTTT");
  const rightButton = document.querySelector(".RIGHTTT");

  leftButton.addEventListener("click", function () {
    productList.scrollBy({ left: -300, behavior: "smooth" }); // Scroll left
  });

  rightButton.addEventListener("click", function () {
    productList.scrollBy({ left: 300, behavior: "smooth" }); // Scroll right
  });
});




  return (
    <div className="container">
      <div className="productList d-flex flex-row justify-content-between">
        {products.map(product => (
          <div className="d-flex flex-column wallpaper" key={product.id}>
            <img src={product.ImageURL} alt={product.IphoneName} />
            {product.isNew === 1 && <p className="red">New</p>}
            <h5>{product.IphoneName}</h5>
            <p>{product.IphoneDescription}</p>
            <p>{product.IphonePrice}</p>
            <div className="d-flex justify-content-between">
              <div className="learnMore">
                <a href={product.LearnMoreLink}>Learn more</a>
              </div>
              <div className="preorder blue">
                <a href={product.BuyLink}>PreOrder</a>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="IIcons">
        <div className="LEFTTT">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div className="RIGHTTT">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <hr className="p-3" />
    </div>
  );
};

export default Iphone3;
