import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import * as React from "react";

function AppBar(props: AppBarProps) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export default AppBar;
