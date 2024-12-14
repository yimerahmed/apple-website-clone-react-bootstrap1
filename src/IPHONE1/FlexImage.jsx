import React from "react";
import iphone16Pro from "../Iphone/iphoneImages/1726916705584-iphone_16_pro_light__sh8e76empwyq_large.svg";
import iphone16light from "../Iphone/iphoneImages/1726916805174-iphone_16_light__1g0j6j3ygciy_large.svg";
import iphone15light from "../Iphone/iphoneImages/iphone_15_light__fj1tpga410a6_large.svg";
import iphoneSe from "../Iphone/iphoneImages/iphone_se_light__cdjrao3pq2he_large.svg";
import iphoneCompare from "../Iphone/iphoneImages/1726917045454-iphone_compare_light__f01dnbvbb62y_large.svg";
import airpods from "../Iphone/iphoneImages/1726917091949-airpods_light__cd9exnztczjm_large.svg";
import airtag from "../Iphone/iphoneImages/1726917180608-airtag_light__c19z9f5le0ia_large.svg";
import accessory from "../Iphone/iphoneImages/1726917241175-accessories_light__e917u1i857e6_large.svg";
import appleCard from "../Iphone/iphoneImages/1726917287547-iphone_apple_card_light__eik9egogyro2_large.svg";
import ios from "../Iphone/iphoneImages/1726917352712-iphone_ios_light__b0jhieo01t0i_large.svg";
import shop from "../Iphone/iphoneImages/1726917409534-shop_iphone_light__e4dlk2n6h26a_large.svg";
import video from "../Iphone/iphoneImages/1726985894412-largeVideo.mp4";


const FlexImage = () => {
  return (
    <div className=" ROWIMAGES">
      <div className="contain">
        <div className="d-flex flex-row justify-content-between align-items-center mx-auto mb-3 mt-3 p-5 rowimage">
          <div className="rowElement">
            <a href="#">
              <img src={iphone16Pro} alt="" />
              <p>iPhone 16 Pro</p>
              <p className="red">New</p>
            </a>
          </div>
          <div className="rowElement">
            <a href="#">
              <img src={iphone16light} alt="" />
              <p>iPhone 16</p>
              <p className="red">New</p>
            </a>
          </div>
          <div className="col-sm-4 col-md-4 col-lg rowElement">
            <a href="#">
              <img src={iphone15light} alt="" />
              <p>iPhone 15</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 col-lg rowElement">
            <a href="#">
              <img src={iphone15light} alt="" />
              <p>iPhone 14</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 col-lg rowElement">
            <a href="#">
              <img src={iphoneSe} alt="" />
              <p>iPhone SE</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 col-lg rowElement">
            <a href="#">
              <img src={iphoneCompare} alt="" />
              <p>Compare</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 col-lg rowElement">
            <a href="#">
              <img src={airpods} alt="" />
              <p>AirPods</p>
              <p className="red">New</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 col-lg rowElement">
            <a href="#">
              <img src={airtag} alt="" />
              <p>AirTag</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 col-lg rowElement">
            <a href="#">
              <img src={accessory} alt="" />
              <p>Accessories</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 col-lg rowElement">
            <a href="#">
              <img src={appleCard} alt="" />
              <p>Apple Card</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 col-lg rowElement">
            <a href="#">
              <img src={ios} alt="" />
              <p>iOS 18</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4 col-lg rowElement">
            <a href="#">
              <img src={shop} alt="" />
              <p>Shop iPhone</p>
            </a>
          </div>
        </div>
      </div>
      <div className="oneCont">
        <div className=" containe mx-auto">
          <div className="container d-flex justify-content-between">
            <div className="iPhone">
              <h1>iPhone</h1>
            </div>
            <div className="iPhone">
              <h3>Designed to be loved.</h3>
            </div>
          </div>
          <div className="embed-responsive embed-responsive-16by9 mx-auto mb-5 video-container">
            <video className="embed-responsive-item" controls autoPlay loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexImage;
