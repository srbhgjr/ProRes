import React from "react";
import Paper from "@mui/material/Paper"
import { Stack } from "@mui/material";
import { loginActions } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import "./pages.css";

export function Contact(props) {


  return (

    <div className="add-item">
      <IconButton>
        <AddIcon />
      </IconButton>
    </div>
  )
}