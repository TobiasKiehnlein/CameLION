import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.scss";
import React from "react";
import { Button } from "@mui/material";
import { loadWasm } from "../utils/wasm";

const Tab3: React.FC = () => {
  return (
    <div>
      <div>
        <span>Tab 2</span>
      </div>
      <div>
        <Button onClick={async () => (await loadWasm())?.greet()} />
      </div>
    </div>
  );
};

export default Tab3;
