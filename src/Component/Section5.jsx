import React from 'react';
import Card from "../CommonResource/images/card.png";
import Trade from "../CommonResource/images/trade In.png";

function Section5() {
  return (
      <section className="container-fluid center getup-section">
      <div className="row ms-1 me-1 gap-3">
        <a className="cash col-sm-12 col-md-5 ft-5 text-decoration-none" href="#">
          <object>
            <div className=" text-center p-5 text-dark">
              <div id="card-image"><img  src={Card } className="img-fluid"  alt="..." />  </div>
              <p>Get up to 3% Daily cash back with every purchase</p>
              <div className="row getup-link mx-auto">
            <div className=" col-6 text-end"> <a href="#" >Learn more <i className="fa fa-angle-right" aria-hidden="true"></i ></a></div>
                <div className="col-6 text-start"> <a href="#">Apply now <i className="fa fa-angle-right" aria-hidden="true"></i></a> </div>
              </div>
            </div>
          </object>
        </a>

        <a className="dollar col-sm-12 col-md-5 ft-5 text-decoration-none" href="#">
          <object>
            <div className=" text-center p-5 text-dark">
              <div> <img src={Trade} className="img-fluid" alt="..." /> </div>
              <p> Get $200-$650 in credit when you trade in iPhone 11 or higher<sup>2</sup></p>
              <div id="dollar-link" className="mx-auto"> <a className="see justify-content-center" href="#">See what your device is worth <i className="fa fa-angle-right" aria-hidden="true"></i ></a> </div>
            </div>
          </object>
        </a>
      </div>
    </section>
  )
}

export default Section5