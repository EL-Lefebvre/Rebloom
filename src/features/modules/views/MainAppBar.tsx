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
          sx={{
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h2"
            underline="none"
            color="inherit"
            href="/"
            sx={{
              color: "black",
              fontWeight: "100",

              letterSpacing: "15px",
            }}
          >
            REBLOOM
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="secondary"
              variant="h6"
              underline="none"
              href="/sign-in/"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Home"}
            </Link>
            <Link
              color="secondary"
              variant="h6"
              underline="none"
              href="/sign-in/"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"About"}
            </Link>
            <Link
              color="secondary"
              variant="h6"
              underline="none"
              href="/sign-in/"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/sign-up/"
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
