import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import Typography from "./modules/components/Typography";
import MainAppBar from "./modules/views/MainAppBar";
import MainAppFooter from "./modules/views/MainAppFooter";
// import privacy from "./modules/views/privacy.md";
import withRoot from "./withRoot";

function Privacy() {
  return (
    <React.Fragment>
      <MainAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          {/* <Markdown>{privacy}</Markdown> */}
        </Box>
      </Container>
      <MainAppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
