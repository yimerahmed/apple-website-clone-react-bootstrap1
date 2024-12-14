import React, { useEffect, useState, useRef } from "react";
import shopData from "./shopJSON.json";
import image1 from "./iphoneImages/1726917287547-iphone_apple_card_light__eik9egogyro2_large.svg";
import image2 from "./iphoneImages/icon_carrier_deals__bv35t3q8kbjm_large.png";
import image3 from "./iphoneImages/icon_delivery__giivw45nosq6_large.png";
import image4 from "./iphoneImages/icon_specialist_alt__e2zhfrjqy7o2_large.png";
import image5 from "./iphoneImages/icon_person__rhg3t7p8xpuq_large.png";
import image6 from "./iphoneImages/icon_asa__d1emxlyyr3cm_large.png";

const imageMap = {
  "1726917287547-iphone_apple_card_light__eik9egogyro2_large.svg": image1,
  "icon_carrier_deals__bv35t3q8kbjm_large.png": image2,
  "icon_delivery__giivw45nosq6_large.png": image3,
  "icon_specialist_alt__e2zhfrjqy7o2_large.png": image4,
  "icon_person__rhg3t7p8xpuq_large.png": image5,
  "icon_asa__d1emxlyyr3cm_large.png": image6,
};

const Iphone6 = () => {
  const [data, setData] = useState([]);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    setData(shopData.items);
  }, []);

  const scrollContainer = (direction) => {
    const scrollAmount = 300;
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="scroll-container mb-5 mt-5" ref={cardContainerRef}>
        <div className="d-flex flex-row">
          {data?.map((item) => {
            const imageSrc = imageMap[item.Image];

            if (!imageSrc) {
              console.error("Image not found for:", item.Image);
            }

            return (
              <div className="d-flex flex-column CardDesign" key={item.id}>
                <div>
                  <img
                    src={imageSrc || "/path/to/placeholder-image.png"}
                    alt={''}
                  />
                </div>
                <div className="save">
                  <h5>
                    {item.Title.split("<br>").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h5>
                </div>
                <div className="save">
                  <p dangerouslySetInnerHTML={{ __html: item.Description }} />
                </div>
                <div className="flexEnd">
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="ONLYICONS">
        <div className="LLEFT" onClick={() => scrollContainer("left")}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div className="RRIGHT" onClick={() => scrollContainer("right")}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Iphone6;
