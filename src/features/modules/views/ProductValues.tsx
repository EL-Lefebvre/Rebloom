import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import * as React from "react";
import curvyLines from "../../assets/productCurvyLines.png";
import ProductDetails from "../components/ProductDetails";
const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const sections = [
  {
    Icon: EmojiNatureIcon,
    title: "Organic Ingredients",
    details:
      "Beauty skin care nurtures your skin with powerful natural ingredients infused into high-tech formulas that deliver immediate and ongoing results.",
  },
  {
    Icon: WbSunnyIcon,
    title: " Natural Sunscreen",
    details:
      "Broad-spectrum protection, ecofriendly, non-oily and doesn't interfere with makeup.",
  },

  {
    Icon: PeopleAltIcon,
    title: "Ethically-sourced",
    details:
      "From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.",
  },
];
function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src={curvyLines}
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          {sections.map((section) => (
            <Grid item xs={12} md={4}>
              <ProductDetails
                key={section.title}
                Icon={section.Icon}
                title={section.title}
                details={section.details}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
