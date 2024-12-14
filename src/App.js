import "./CommonResource/css/styleboot.css";
import "./iphone.css"
import Header from "./Component/Header";
import Main from "./Component/Main"
import Footer from "./Component/Footer";
import Videos from "./Component/Videos";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import RoutesContainer from "./Component/RoutesContainer";



function App() {
  return (
    <div>
      <Header />
<RoutesContainer/>
      <Footer />
    </div>
  );
}

export default App;
