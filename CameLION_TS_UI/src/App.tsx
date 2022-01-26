import { BrowserRouter as Router, Link, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Theme variables */
import "./theme/variables.scss";
import { Navigate, Route } from "react-router";
import { CakeRounded, HomeMax, Icecream } from "@mui/icons-material";

const App: React.FC = () => (
  <>
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/tab2" element={<Tab2 />} />
        <Route path="/tab3" element={<Tab3 />} />
        <Route path="/" element={<Navigate to={"/Home"} replace />} />
      </Routes>
      <div>
        <Link to={"/Home"}>
          <HomeMax />
          <span>Home</span>
        </Link>
        <Link to={"/tab2"}>
          <Icecream />
          <span>Tab 2</span>
        </Link>
        <Link to={"/tab3"}>
          <CakeRounded />
          <span>Tab 3</span>
        </Link>
      </div>
    </Router>
  </>
);

export default App;
