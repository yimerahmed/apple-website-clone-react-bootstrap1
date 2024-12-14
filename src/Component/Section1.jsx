import React from 'react'

function Section1() {
  return (
        <a  className="container-fluid p-5"  href="#">
      <object>
        <div className="titanium col-12 ft-5 text-center bg-dark text-white text-decoration-none">
          <div className="h1">iPhone 15 Pro</div>
          <div className="h4">Titanium. So strong. So light. So pro.</div>
          <div className="row titanium-link mx-auto">
            <div className="col-6 text-end"><a href="#" ><span className="mr-5">Learn more <i className="fa fa-angle-right" aria-hidden="true"></i></span></a> </div>
            <div className="col-6 text-start">  <a href="#">Buy <i className="fa fa-angle-right" aria-hidden="true"></i></a> </div>
          </div>
        </div>
      </object>
    </a>
  )
}

export default Section1