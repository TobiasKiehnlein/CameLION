import "./Home.scss";
import React from "react";
import { IconToggle } from "../components/IconToggle";
import { AppsRounded, ListRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { test, alert_me_thread, alert_me } from "threadrr-wasm-example";

const Toolbar = () => (
  <>
    <span>CameLION - Home</span>
    <div>
      <Button>Open</Button>
      <IconToggle onChange={console.log}>
        <ListRounded />
        <AppsRounded />
      </IconToggle>
    </div>
  </>
);

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Toolbar />
      </div>
      <div>
        <Button
          onClick={async () => {
            await test();
          }}
        />
      </div>
      <div>
        <Button
          onClick={async () => {
            await alert_me_thread("lelelel");
          }}
        />
      </div>
    </div>
  );
};

export default Home;
