import React from 'react'
import Fitness from "../CommonResource/images/fitnes+.png";

function Section4() {
  return (
    <section className="container-fluid  macbook-section">
      <div className="row ms-1 me-1 gap-3">
        <a className="macbook-wrapper col-sm-12 col-md-5 ft-5 text-decoration-none" href="#">
          <object>
            <div className="  text-dark text-center  p-5">
              <p className="h1"><b>MacBook Pro</b></p>
              <p className="h4">Mind-blowing. Head-turning.</p>
              <div className="row mac-link mx-auto">
           <div className=" col-6 text-end"> <a href="#">Learn more <i className="fa fa-angle-right" aria-hidden="true"></i ></a> </div>
                <div className="col-6 text-start"> <a href="#" >Buy <i className="fa fa-angle-right" aria-hidden="true"></i ></a></div>
              </div>
            </div>
          </object>
        </a>

        <a className=" fitness-wrapper col-sm-12 col-md-5 ft-5 text-decoration-none" href="#">
          <object>
            <div className=" text-dark text-center  p-5">
              <div><img src={Fitness} className="img-fluid"  alt="..." /> </div>
              <p>From HIIT to Yoga. From 5 to 45 minutes.</p>
              <p>There is something for everyone</p>
              <div className="row fitness-link mx-auto">
                 <div className=" col-6 text-end"> <a href="#" >Learn more  <i className="fa fa-angle-right" aria-hidden="true"></i ></a> </div>
                <div className="col-6 text-start"> <a href="#">Try it free <sup>1</sup> </a> </div>
              </div>
            </div>
          </object>
        </a>
      </div>
    </section>
  )
}

export default Section4