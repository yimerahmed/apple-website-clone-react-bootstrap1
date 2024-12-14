import React from "react";
import data from "./mag&Ait.json"; 

const Iphone7 = () => {
  return (
    <div className="oneContainer">
      <div className="d-flex justify-content-between p-5">
        <div>
          <h1>iPhone essentials.</h1>
        </div>
        <div className="blue"><a className="blue" href="https://www.apple.com/us/shop/goto/iphone/accessories">All iPhone accessories</a>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>

      <div className="container d-flex justify-content-between exploreWrapper">
        
        {data.items?.map((item, index) => (
          <div className="container" key={item.id}>
            <div className={`d-flex flex-column explore${index + 1}`}>
              <div>
                <div className="save">
                  <h4>{item.Title}</h4>
                </div>
                <div className="save">
                  <p>{item.Description.replace(/\r\n/g, "<br/>")}</p>
                </div>
                <div className="pb-5 blue">
                  <a href={item.Link}>Shop {item.Title} accessories</a>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </div>
              <div className="threePhones">
                {/* Display images conditionally based on item */}
                {item.Title === "MagSafe" ? (
                  <>
                    <img
                      src={`./Iphone/iphoneImages/${item.Image}`}
                      className="img-fluid"
                      alt={item.Title}
                    />
                    <img
                      src={`./Iphone/iphoneImages/${item.Image}`}
                      className="img-fluid"
                      alt={item.Title}
                    />
                    <img
                      src={`./Iphone/iphoneImages/${item.Image}`}
                      className="img-fluid"
                      alt={item.Title}
                    />
                  </>
                ) : (
                  <img
                    src={`./Iphone/iphoneImages/${item.Image}`}
                    className="img-fluid"
                    alt={item.Title}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="p-5">Significant others.</h1>
    </div>
  );
};

export default Iphone7;
