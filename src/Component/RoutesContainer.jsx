import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './Main'
import Bag from './NAV/Cart/Cart'
import FourO4 from './NAV/FourO4'
import Search from './NAV/Search/Search'
import Support from './NAV/Support/Support'
import Tv from './NAV/TV&Home/Tv'
import Airpod from './NAV/Airpods/Airpod'
import Vision from './NAV/Vision/Vision'
import Watch from './NAV/Watch/Watch'
import Accessory from './NAV/Accessory/Accessory'
import Ipad from './NAV/Ipad/Ipad'
import Iphonemain from '../IPHONE1/Iphonemain';
import FlexImage from '../IPHONE1/FlexImage'
import Storee from './NAV/Stor/Storee'
import Mac from './NAV/Mac/Mac'
import Entertainment from './NAV/Entertainment/Entertainment'
import Detail from '../IPHONE1/Detail'
import Videos from "./Videos";



function RoutesContainer() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Main />
              <Videos />
            </div>
          }
        />
        <Route path="/store" element={<Storee />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route
          path="/iphone"
          element={
            <div>
              <FlexImage />
              <Iphonemain />
            </div>
          }
        />
        <Route path="/watch" element={<Watch />} />
        <Route path="/apple-vision-pro" element={<Vision />} />
        <Route path="/airpods" element={<Airpod />} />
        <Route path="/tv-home" element={<Tv />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/us/shop/goto/buy_accessories" element={<Accessory />} />
        <Route path="/support" element={<Support />} />
        <Route path="/us/search" element={<Search />} />
        <Route path="/us/shop/goto/bag" element={<Bag />} />
        <Route path="*" element={<FourO4 />} />
        <Route path="/iphone/:productId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default RoutesContainer;