import React, { useEffect, useState } from "react"

const Iphone2 = () => {
  const [data, setData] = useState({
    video_title: "",
    video_subtitle: "",
    video_file_path: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:700/jsonget");
        const result = await response.json();
        if (result.items.length > 0) {
          setData(result.items[0]); 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="oneContainer">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="iPhone">
            <h1>{data.video_title}</h1>
          </div>
          <div className="iPhone">
            <h3>{data.video_subtitle}</h3>
          </div>
        </div>

        <div className="embed-responsive embed-responsive-16by9 mb-5">
          <video className="embed-responsive-item" controls autoPlay>
            <source src={data.video_file_path} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Iphone2;
