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

  const handleTabChange = (type) => {
    setSelectedTab(type);
  };


  return (
    <Stack
      direction="column"
      spacing={0.5}
      className="menu-page"
    > 
      <div className="tabs">
        <span 
          className={selectedTab === 0 ? "tab-name selected-tab" : "tab-name" }
          onClick={() => handleTabChange(0)}
        >
          Personal
        </span>
        <span 
          className={selectedTab === 1 ? "tab-name selected-tab" : "tab-name" }
          onClick={() => handleTabChange(1)}
        >
          Content
        </span>
      </div>

      {selectedTab === 0 &&
      <Contact />}

      {selectedTab === 1 &&
      <Content />}
    </Stack>
  )
}