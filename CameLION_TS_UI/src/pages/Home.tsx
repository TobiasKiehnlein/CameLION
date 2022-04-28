import "./Home.scss";
import React from "react";
import { IconToggle } from "../components/IconToggle";
import { AppsRounded, ListRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

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
      <div></div>
    </div>
  );
};

export default Home;
