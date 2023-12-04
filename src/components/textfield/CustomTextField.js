import * as React from "react";
import TextField from "@mui/material/TextField";

// 1- Default styles
// const rootStyles = {
//   //   backgroundColor: "#ffd60a",
//   //   border: "3px solid #001d3d",
// };

const rootStyles = {
  // Apply focused label color
  "& label.Mui-focused": {
    color: "var(--color-green300)",
  },
};

const inputLabelStyles = {
  //   color: "#003566",
  //   textTransform: "capitalize",
};

const rootInputStyles = {
  "&:hover fieldset": {
    // border: "2px solid blue!important",
    // borderRadius: 0,
  },
  "&:focus-within fieldset, &:focus-visible fieldset": {
    // border: "4px solid red!important",
    borderColor: "white !important",
  },
  "&:focus-within": {
    color: "white",
  },
};

const inputStyles = {
  //   color: "red",
  color: "white",

  //   paddingLeft: "15px",
  //   fontSize: "20px",
};

const helperTextStyles = {
  //   color: "red",
  color: "white",
};

export default function CustomTextFiels({
  label = "default label",
  // 2- User custom styles
  customRootStyles,
  customInputLabelStyles,
  customRootInputStyles,
  customInputStyles,
  customHelperTextStyles,
  multiline,
  rows,
}) {
  return (
    <TextField
      label={label}
      multiline={multiline ? true : false}
      rows={multiline && rows}
      //   helperText="Please enter a valid input"
      sx={{ ...rootStyles, ...customRootStyles }}
      InputLabelProps={{
        sx: {
          ...inputLabelStyles,
          ...customInputLabelStyles,
        },
      }}
      InputProps={{
        sx: {
          ...rootInputStyles,
          ...customRootInputStyles,
        },
      }}
      inputProps={{
        sx: {
          ...inputStyles,
          ...customInputStyles,
        },
      }}
      FormHelperTextProps={{
        sx: {
          ...helperTextStyles,
          ...customHelperTextStyles,
        },
      }}
    />
  );
}
