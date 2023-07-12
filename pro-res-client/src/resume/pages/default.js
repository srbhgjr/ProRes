import React from "react";
import Paper from "@mui/material/Paper"
import { Stack } from "@mui/material";
import { loginActions } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import "./pages.css";
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';


export function Default(props) {


  return (
    <div
      className="menu-page"
    >
      <div className="menu-header">
        <span>ProRes</span>
        <div>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}