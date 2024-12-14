import React from 'react';
import WatchSeries from "../CommonResource/images/watchseries9.png";
import WatchUltra2 from "../CommonResource/images/watch-ultra-2.png";

function Section3() {
  return (
   <section className="container-fluid  smarter-section">
      <div className="row ms-1 me-1 gap-3">
        <a className=" smart col-sm-12 col-md-5 ft-5 p-5" href="#">
          <object>
            <div className=" text-white  text-decoration-none text-center pt-5 ">
              <div><img src={WatchSeries} className="img-fluid" alt=""/> </div>
              <p className="h5">Smarter. Brighter. Mightier</p>
              <div className="row brighter-link mx-auto">
          <div className=" col-6 text-end"><a href="#">Learn more <i className="fa fa-angle-right" aria-hidden="true"></i></a>  </div>
          <div className="col-6 text-start"> <a href="#">Buy <i className="fa fa-angle-right" aria-hidden="true"></i></a></div>
              </div>
            </div>
          </object>
        </a>

        <a className="adventure-column col-sm-12 col-md-5 ft-5 text-decoration-none" href="#">
          <object>
            <div className=" text-dark  text-center p-5">
              <div><img src={WatchUltra2} className="img-fluid" alt="Ultra2 image" /> </div>
              <p className="h5">Next level adventure</p>
              <div className="row adventure-link  mx-auto">
            <div className=" col-6 text-end"> <a href="#" >Learn more <i className="fa fa-angle-right" aria-hidden="true"></i></a></div>
 <div className="col-6 text-start"> <a href="#" >Buy <i className="fa fa-angle-right" aria-hidden="true"></i ></a></div>
              </div>
            </div>
          </object>
        </a>
      </div>
    </section>
  )
}

export default Section3