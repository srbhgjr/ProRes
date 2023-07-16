import React from "react";
import Paper from "@mui/material/Paper"
import { Stack } from "@mui/material";
import { loginActions } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import "./resume.css";
import { Default } from "./pages/default";

export function Menu(props) {


  return (
    <Paper
      className="menu"
      elevation={3}
      sx={{
        borderRadius: "10px"
      }}
    >
      <Default />
    </Paper>
  )
}