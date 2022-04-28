import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.scss";
import React from "react";
import { Button } from "@mui/material";
import { test } from "threadrr-wasm-example";

const Tab3: React.FC = () => {
  return (
    <div>
      <div>
        <span>Tab 2</span>
      </div>
      <div>
        <Button
          onClick={async () => {
            await test();
          }}
        />
      </div>
    </div>
  );
};

export default Tab3;
