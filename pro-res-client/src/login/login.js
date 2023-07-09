import React, { useState } from "react";
import Paper from "@mui/material/Paper"
import { Stack } from "@mui/material";
import "./login.css";
import { LightInput } from "../components/input/inputLight";
import { ColouredButton } from "../components/mui/coloured_button";
import { loginActions } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    if (e.type === "username") {
      setUsername(e.value)
    } else if (e.type === "password") {
      setPassword(e.value)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // authentication logic to be added later

    dispatch(loginActions.setUserProfile({
      username: username
    }))
    navigate("/resume")
  }

  return (
    <div
      className="login-container"
    >
      <Paper
        elevation={5}
        className="login-content"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20rem",
          padding: "2.5rem 0.5rem",
          height: "fit-content",
          borderRadius: "10px"
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <Stack
            spacing={3}
          >
            <LightInput
              placeholder="Username"
              defaultValue=""
              inputType="username"
              onChange={handleInputChange}
            />
            <LightInput
              placeholder="Password"
              defaultValue=""
              inputType="password"
              onChange={handleInputChange}
              type="password"
            />
            <ColouredButton
              variant="outlined"
              type="submit"
            >
              Login
            </ColouredButton>
          </Stack>
        </form>
      </Paper>
    </div >
  )
}