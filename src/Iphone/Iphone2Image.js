import React, { useEffect, useState } from 'react';

const Iphone2Image = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:700/jsonimage");
        const result = await response.json();
        setFeatures(result.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


document.addEventListener("DOMContentLoaded", function () {
  const favoritesContainer = document.querySelector(".favoritesContainer"); // Select the container
  const leftButton = document.querySelector(".LEFT");
  const rightButton = document.querySelector(".RIGHT");

  leftButton.addEventListener("click", function () {
    favoritesContainer.scrollBy({ left: -300, behavior: "smooth" }); // Scroll left
  });

  rightButton.addEventListener("click", function () {
    favoritesContainer.scrollBy({ left: 300, behavior: "smooth" }); // Scroll right
  });
});




  return (
    <div className="oneContainer">
      <div className="container">
        <h2 className="Getoknow">Get to know iPhone.</h2>
        <div className="d-flex favoritesContainer ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="col-sm-12 col-md-5 col-lg favorites getMonth mb-4"
            >
              <p>{feature.image_title}</p>
              <h3>{feature.image_description}</h3>
              <img
                src={feature.image_file_path.replace(/\\/g, "/")}
                alt={""}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="onlyIcons">
        <div className="LEFT">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div className="RIGHT">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Iphone2Image;
