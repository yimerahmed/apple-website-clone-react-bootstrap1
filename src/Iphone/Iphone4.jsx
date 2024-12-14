import React, { useEffect, useState } from 'react';


const Iphone4Db = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await fetch("http://localhost:600/jsonget"); 
      const data = await response.json();
      setItems(data.items);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-row wallpaperContainer">
        {items?.map((item) => (
          <div className="d-flex flex-column wallpaper1" key={item.id}>
            <div className="mt-4">
              <img src={item.ImageURL} alt={''} />
            </div>
            <p>{item.Title}</p>
            <div className="mt-4">
              <img src={item.GPUURL} alt="" />
            </div>
            <p>{item.GPU}</p>
            <div className="mt-4">
              <img src={item.CameraUrl} alt="" />
            </div>
            <p>{item.CameraFunction}</p>
            <div className="mt-4">
              <img src={item.CameraSystem} alt="" />
            </div>
            <p>{item.CameraSystemDetail}</p>
            <div className="mt-4">
  <img src="https://www.apple.com/v/iphone/home/bw/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large.png" alt="Battery" />
</div>

            <p>Up to 33 hours video playback2</p>
          </div>
        ))}
      </div>
      <div className="batteryIcons">
        <div className="LEFTbatery">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div className="RIGHTbatery">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Iphone4Db;
