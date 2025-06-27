import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Empty from "./Empty";
import Portfolio from "../pages/Profile/Portfolio";
import Layout from "../Layout/Layout";
function Routing(){
    return(
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="profile" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Empty />} />
                </Route>
            </Routes>
    )
}

export default Routing;