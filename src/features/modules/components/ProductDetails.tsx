import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import React from "react";
import Typography from "../components/Typography";

type ProductProps = {
  Icon: Object | any;
  title: string;
  details: string;
};

const ProductDetails = ({ Icon, title, details }: ProductProps) => {
  const item: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
  };

  return (
    <Box
      sx={{
        ...item,

        minHeight: "300px",
        padding: "20px",
      }}
    >
      <Icon fontSize="large" />
      <Typography variant="h6" sx={{ my: 5 }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {details}
      </Typography>
    </Box>
  );
};

export default ProductDetails;
