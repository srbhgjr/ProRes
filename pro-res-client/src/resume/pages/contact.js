import React from "react";
import Paper from "@mui/material/Paper"
import { Stack } from "@mui/material";
import { loginActions, infoActions } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import "./pages.css";
import { BlendedInput } from "../../components/input/blendedInput";

export function Contact(props) {
  const dispatch = useDispatch();
  const {
    firstname,
    lastname,
    email,
    contact_no
  } = useSelector(state => state.infoStore);


  const handleInputChange = (e) => {
    console.log('e', e);
    dispatch(infoActions.setPersonalInfo({
      type: e.type,
      value: e.value
    }))
  }

  return (

    <Stack
      spacing={1}
      className="contact"
    >
      <Stack
        direction="row"
        spacing={1}
      >
        <BlendedInput
          classVariant="search-field-blended-100"
          styles={{
            width: "7.25rem",
          }}
          placeholder="firstname"
          defaultValue=""
          value={firstname}
          inputType="firstname"
          onChange={handleInputChange}
        />
        <BlendedInput
          classVariant="search-field-blended-100"
          styles={{
            width: "7.25rem",
          }}
          placeholder="lastname"
          defaultValue=""
          value={lastname}
          inputType="lastname"
          onChange={handleInputChange}
        />
      </Stack>
      <BlendedInput
        classVariant="search-field-blended-100"
        styles={{
          width: "15rem",
        }}
        placeholder="email"
        defaultValue=""
        value={email}
        inputType="email"
        onChange={handleInputChange}
      />
      <BlendedInput
        classVariant="search-field-blended-100"
        styles={{
          width: "15rem",
        }}
        placeholder="contact no."
        defaultValue=""
        value={contact_no}
        inputType="contact_no"
        onChange={handleInputChange}
      />
    </Stack>
  )
}