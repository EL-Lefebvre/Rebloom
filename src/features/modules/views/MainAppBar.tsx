import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import * as React from "react";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function MainAppBar() {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          height: "120px",
          backgroundColor: "white",
          marginBottom: "40px",
          paddingTop: "25px",
        }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between", backgroundColor: "#efead7" }}
        >
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{
              fontSize: 36,

              color: "#c85103",

              letterSpacing: "10px",
            }}
          >
            <h2> REBLOOM </h2>
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Sign Up"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default MainAppBar;
