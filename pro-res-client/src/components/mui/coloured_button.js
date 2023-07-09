import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { backdropClasses, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

export const ColouredButton = styled(Button)(({ theme }) => ({
	"&:hover": {
		color: "rgba(245, 245 ,245 , 0.875)",
    border: "1px solid rgb(255, 0, 76)",
		backgroundColor: "rgba(255, 0, 76, 0.875)"
	},
	"&": {
		color: "rgb(255, 0, 76)",
    border: "1px solid rgba(255, 0, 76, 0.875)",
    fontFamily: "Josefin Sans",
    paddingBottom: "0.1rem",
		fontWeight: "900",
    borderRadius: "10px",
	}
}));
