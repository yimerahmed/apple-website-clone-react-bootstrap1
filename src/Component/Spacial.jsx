import React from 'react'; 
import InplaceOfVision from "../CommonResource/images/inplace-of vision.png"



function Spacial() {
  return (
      <div>
        <a className="container-fluid p-5 " href="#">
      <object>
        <div className="col-12 text-dark ft-5 text-center text-decoration-none spacial-wrapper mb-0">
          <div><img style={{ width: '200px' }} src={InplaceOfVision}  alt="in place of vision image" /> </div>
          <p className="h5">Wellcome to the era of spacial computing.</p>
          <p className="h6 text-muted">  <span className="text-muted" >Pre-order starting 1.19 at 5.00 am. PT</span>  </p>
          <p className="h6 text-muted">Available starting 2.2</p>
          <div className="col-12">  <a href="#"  >Learn more <i className="fa fa-angle-right" aria-hidden="true"></i ></a>  </div>
        </div>
      </object>
    </a>  

    </div>
  )
}

export default Spacial;