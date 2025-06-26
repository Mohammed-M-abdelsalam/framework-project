import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Empty from "./Empty";
import Portfolio from "../pages/Profile/Portfolio";
function Routing(){
    return(
        <Routes>
            <Route path="/framework-project" element={<Home />} />
            <Route path="framework-project/about" element={<About />} />
            <Route path="framework-project/profile" element={<Portfolio />} />
            <Route path="framework-project/contact" element={<Contact />} />
            <Route path="*" element={<Empty />} />
        </Routes>
    )
}

export default Routing;