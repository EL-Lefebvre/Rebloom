import Box from "@mui/material/Box";
import * as React from "react";
import Typography from "./modules/components/Typography";
import { email, required } from "./modules/form/validation";
import AppForm from "./modules/views/AppForm";
import MainAppBar from "./modules/views/MainAppBar";
import MainAppFooter from "./modules/views/MainAppFooter";
import withRoot from "./withRoot";

function About() {
  const [sent, setSent] = React.useState(false);

  const validate = (values: { [index: string]: string }) => {
    const errors = required(["email", "password"], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <React.Fragment>
      <MainAppBar />
      <Box
        sx={{ pointerEvents: "none", position: "absolute", width: "100%" }}
      />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            About Us
          </Typography>
        </React.Fragment>

        <Typography align="center"></Typography>
      </AppForm>
      <MainAppFooter />
    </React.Fragment>
  );
}

export default withRoot(About);
