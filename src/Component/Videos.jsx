import React, { useState, useEffect } from "react";

function Videos() {
  const [Apple, setApple] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=9`
    )
      .then((res) => res.json())
      .then((data) => {
        setApple(data.items);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <>
    <div><h1 id="latestVideos">Latest Videos</h1></div>
      <div className="container">
        <div className="row">
          {Apple?.map((item, index) => {
            let vidId = item.id.videoId;
            let videoLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="videothumbnail">
                  <a className="anchorLast" href={videoLink}><img src={item.snippet.thumbnails.high.url} alt={item.snippet.title}/></a>
                </div>
                <div className="videoInfowrapper">
                  <div className="videotitle p-2">
                    <a className="anchorLast" href={videoLink}>{item.snippet.title}</a>
                  </div>
                  <div className="videodescription p-2">
                    <a className="anchorLast" href={videoLink}>{item.snippet.description}</a>
                  </div>
                   <div className="videodescription p-2 mx-auto">
                    <a className="anchorLast" href={videoLink}>{item.snippet.publishedAt}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Videos;
