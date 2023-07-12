import React from "react";
import Paper from "@mui/material/Paper"
import { Stack } from "@mui/material";
import "./resume.css";
import { Menu } from "./menu";
import { Preview } from "./preview";
 
export function Resume() {


  return (
    <div className="background-1">
      <Paper 
        elevation={3}
        className="background-2"
        sx={{
          borderRadius: "20px"
        }}
      >
        <Menu />
        <Preview />
      </Paper>
    </div>
  )
}