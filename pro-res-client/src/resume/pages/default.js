import React, { useState } from "react";
import Paper from "@mui/material/Paper"
import { Stack } from "@mui/material";
import { loginActions } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import "./pages.css";
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { Tabs, Tab } from '@mui/material';
import { Contact } from "./contact";
import { Content } from "./content";

export function Default(props) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    console.log('new value', newValue);
    setSelectedTab(newValue);
  };


  return (
    <Stack
      direction="column"
      spacing={1}
      className="menu-page"
    >
      <div className="menu-header">
        <span>ProRes</span>
        <div>
          <IconButton>
            <SettingsIcon sx={{ fontSize: "1.15rem" }} />
          </IconButton>
        </div>
      </div>

      <Tabs 
        className="tabs"
        value={selectedTab} 
        onChange={handleTabChange} 
        centered
      >
        <Tab sx={{ textTransform: "none" }} label="Contact" />
        <Tab sx={{ textTransform: "none" }} label="Content" />
      </Tabs>

      {selectedTab === 0 &&
      <Contact />}

      {selectedTab === 1 &&
      <Content />}
    </Stack>
  )
}