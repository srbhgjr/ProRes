import React from "react";
import Paper from "@mui/material/Paper"
import { Stack } from "@mui/material";
import { loginActions } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import "./resume.css";
import { Divider } from '@mui/material';


export function Preview(props) {
  const {
    firstname,
    lastname,
    email,
    contact_no
  } = useSelector(state => state.infoStore);

  return (
    <Stack
      spacing={2}
      className="preview"
    >

      {/* personal details */}
      <Stack spacing={1}>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div></div>
          <Stack spacing={1} direction="row" sx={{ float: "right" }}>
            <span
              style={{ color: "gray", fontSize: "2rem", letterSpacing: "0.1rem" }}
            >
              {firstname}
            </span>
            <span
              style={{
                color: "rgb(141,35,170)", fontSize: "2rem", fontWeight: "bold", letterSpacing: "0.2rem"
              }}
            >
              {lastname}
            </span>
          </Stack>
        </div>

        <Divider variant="middle" />

        <div className="contact-info">
          <span>{email}</span>
          <span>{contact_no}</span>
        </div>
      </Stack>


    </Stack>
  )
}