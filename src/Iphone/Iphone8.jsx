import React, { useEffect, useState } from "react";

const Iphone8 = () => {
  const [data, setData] = useState({ mac: [], watch: [], airpod: [] });

  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:600/jsonmac"); 
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Mobile Container */}
      <div className="container d-none d-sm-block d-md-block d-lg-none">
        <div className="d-flex justify-content-between scriptlike">
          <div className="p-5">
            {/* Mac Section */}
            {data.mac.map((macItem) => (
              <div key={macItem.id}>
                <div className="d-flex">
                  <div className="pr-5">
                    <h3>{macItem.Title}</h3>
                  </div>
                  <div className="angleup1">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                    <i
                      className="fa fa-angle-down angleDown1"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <p className="paragraph1">{macItem.Description}</p>
                <div className="handby">
                  <img
                    src={`./Iphone/iphoneImages/${macItem.Image}`}
                    alt={macItem.Title}
                  />
                </div>
                <hr />
              </div>
            ))}

            {/* Watch Section */}
            {data.watch.map((watchItem) => (
              <div key={watchItem.watchid}>
                <div className="d-flex">
                  <div className="pr-5">
                    <h3>{watchItem.Title}</h3>
                  </div>
                  <div className="angleup2">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                    <i
                      className="fa fa-angle-down angleDown2"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <p className="paragraph2">{watchItem.Description}</p>
                <div className="watch_dkk">
                  <img
                    src={`./Iphone/iphoneImages/${watchItem.Image}`}
                    alt={watchItem.Title}
                  />
                </div>
                <hr />
              </div>
            ))}

            {/* AirPods Section */}
            {data.airpod.map((airpodItem) => (
              <div key={airpodItem.airpodid}>
                <div className="d-flex">
                  <div className="pr-5">
                    <h3>{airpodItem.Title}</h3>
                  </div>
                  <div className="angleup3">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                    <i
                      className="fa fa-angle-down angleDown3"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <p className="paragraph3">{airpodItem.Description}</p>
                <div className="airpods">
                  <img
                    src={`./Iphone/iphoneImages/${airpodItem.Image}`}
                    alt={airpodItem.Title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Screen Container */}
      <div className="container d-sm-none d-md-none d-lg-block">
        <div className="d-flex justify-content-between scriptlike">
          <div className="p-5">
            {/* Mac Section */}
            {data.mac.map((macItem) => (
              <div key={macItem.id}>
                <div className="d-flex">
                  <div className="pr-5">
                    <h3>{macItem.Title}</h3>
                  </div>
                  <div className="angleup1">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                    <i
                      className="fa fa-angle-down angleDown1"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <p className="paragraph1">{macItem.Description}</p>
                <hr />
              </div>
            ))}

           
            {data.watch.map((watchItem) => (
              <div key={watchItem.watchid}>
                <div className="d-flex">
                  <div className="pr-5">
                    <h3>{watchItem.Title}</h3>
                  </div>
                  <div className="angleup2">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                    <i
                      className="fa fa-angle-down angleDown2"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <p className="paragraph2">{watchItem.Description}</p>
                <hr />
              </div>
            ))}

            
            {data.airpod.map((airpodItem) => (
              <div key={airpodItem.airpodid}>
                <div className="d-flex">
                  <div className="pr-5">
                    <h3>{airpodItem.Title}</h3>
                  </div>
                  <div className="angleup3">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                    <i
                      className="fa fa-angle-down angleDown3"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <p className="paragraph3">{airpodItem.Description}</p>
              </div>
            ))}
          </div>

          
          <div className="handby">
            <img
              src={`./Iphone/iphoneImages/${data.mac[0]?.Image}`}
              alt="Mac"
            />
          </div>
          <div className="watch_dkk">
            <img
              src={`./Iphone/iphoneImages/${data.watch[0]?.Image}`}
              alt="Watch"
            />
          </div>
          <div className="airpods">
            <img
              src={`./Iphone/iphoneImages/${data.airpod[0]?.Image}`}
              alt="AirPods"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Iphone8;
