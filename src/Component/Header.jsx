/////N.B:///////////////////npm create vite@latest//////
import React from 'react';
import { Link } from "react-router-dom";
import AppleLogo from "../CommonResource/icons/logo.png";
import SearchLogo from "../CommonResource/icons/search-icon.png";
import CartLogo from "../CommonResource/icons/cart.png";
import $ from "jquery";
import "../CommonResource/JS/bars";
// import '../CommonResource/css/styleboot.css'

function Header() {
  $(document).ready(function () {
    const $showList = $("#show-list");
    const $hideList = $("#hide-list");
    const $list = $(".barEvent");
    // const $store = $(".store");

   $showList.click(function () {
     $list.slideDown();
     $showList.hide(); // Hide the 'fa-bars' icon
     $hideList.show();
   });
    $hideList.click(function () {
      $list.slideUp();
      $showList.show(); // Show the 'fa-bars' icon
      $hideList.hide(); // Hide the 'fa-times' icon
    });
    });

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light fixed-top header">
<div className="container navbar align-items-center justify-content-center ul-wrapper">
<ul className="navbar-nav flex-row mobile-size">
<li className="nav-item d-sm-block d-md-none"><Link id="logo" to="/"><img style={{ width: "15px" }} src={AppleLogo} alt="Apple Logo"/></Link></li>
<div className="search-cartLogo">
<li className="nav-item d-sm-block d-md-none"><Link to="/us/search"><img style={{ width: "15px" }} src={SearchLogo} alt="Search icon"/></Link></li>
<li className="nav-item d-sm-block d-md-none"><Link to="/us/shop/goto/bag"><img style={{ width: "15px" }} src={CartLogo} alt="Cart icon"/></Link></li>
<span className="for-header"><i className="fa fa-bars d-sm-block d-md-none" aria-hidden="true" id="show-list"></i></span>
      </div>
    </ul>
  </div>
</nav>



<nav className="navbar navbar-expand-lg navbar-light fixed-top header barEvent">
<div className="container navbar ul-wrapper barbar">
<ul className="navbar-nav flex-column d-md-none">  
<li className="d-flex justify-content-end"><i className="fa fa-times true" aria-hidden="true" id="hide-list"></i></li>    
  <li> <Link className="text-white nav-link store" to="/store"> Store </Link> </li>
  <li> <Link className="text-white nav-link" to="/mac/">Mac </Link> </li>
  <li> <Link className="text-white nav-link" to="/ipad/">iPad</Link> </li>
  <li><Link className="text-white nav-link" to="/iphone/">iPhone</Link></li>
  <li><Link className="text-white nav-link" to="/watch/">Watch</Link> </li>
  <li><Link className="text-white nav-link" to="/apple-vision-pro/"> Vision</Link></li>
  <li><Link className="text-white nav-link" to="/airpods/"> AirPods</Link> </li>
  <li><Link className="text-white nav-link" to="/tv-home/">TV & Home</Link> </li>
  <li><Link className="text-white nav-link" to="/entertainment/">Entertainment </Link></li>
  <li><Link className="text-white nav-link" to="/us/shop/goto/buy_accessories">Accessories</Link></li>
  <li><Link className="text-white nav-link" to="/?cid=gn-ols-home-hp-tab">Support </Link></li>
</ul>
</div>
</nav>



<nav className="navbar navbar-expand-lg navbar-light fixed-top header lastExpand">
  <div className="container navbar align-items-center justify-content-center ul-wrapper">
<ul className="navbar-nav flex-row"> 
<li className="nav-item d-none d-md-block"> <Link id="logo" to="/"> <img style={{ width: "15px" }} src={AppleLogo} alt="Apple Logo" /> </Link> </li>           
<li className="nav-item d-none d-md-block onlyText"> <Link className="text-white nav-link" aria-current="page" to="/store"> Store </Link> </li>
<li className="nav-item d-none d-md-block onlyText"> <Link className="text-white nav-link" to="/mac">Mac</Link> </li>
<li className="nav-item d-none d-md-block onlyText"> <Link className="text-white nav-link" to="/ipad">iPad</Link> </li>
<li className="nav-item d-none d-md-block onlyText"><Link className="text-white nav-link" to="/iphone">iPhone</Link></li>
<li className="nav-item d-none d-md-block onlyText"><Link className="text-white nav-link" to="/watch">Watch</Link> </li>
<li className="nav-item d-none d-md-block onlyText"><Link className="text-white nav-link" to="/apple-vision-pro">Vision</Link></li>
<li className="nav-item d-none d-md-block onlyText"><Link className="text-white nav-link" to="/airpods">AirPods</Link> </li>
<li className="nav-item d-none d-md-block onlyText"><Link className="text-white nav-link" to="/tv-home">TV & Home</Link></li>
<li className="nav-item d-none d-md-block onlyText"><Link className="text-white nav-link" to="/entertainment">Entertainment</Link></li>
<li className="nav-item d-none d-md-block onlyText"><Link className="text-white nav-link" to="/us/shop/goto/buy_accessories">Accessories</Link></li>
<li className="nav-item d-none d-md-block onlyText"><Link className="text-white nav-link" to="/support">Support</Link> </li>
<li className="nav-item d-none d-md-block"> <Link to="/us/search"><img style={{ width: "15px" }} src={SearchLogo} alt="Search icon"/> </Link> </li>
<li className="nav-item d-none d-md-block"> <Link to="/us/shop/goto/bag"> <img style={{ width: "15px" }} src={CartLogo} alt="Cart icon" /> </Link> </li>
</ul>
</div>
</nav>

    </div>
  );
}

export default Header;
