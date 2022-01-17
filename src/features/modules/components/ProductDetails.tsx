import React from 'react'
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "../components/Typography";

type ProductProps = {
    Icon: any, 
    title: string, 
    details: string,
}

const ProductDetails = ({Icon, title, details}: ProductProps) => {
    const item: SxProps<Theme> = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 5,
      };

    return (
        <Grid item xs={12} md={4}>
        <Box sx={item}>
          < Icon fontSize='large' />
          <Typography variant="h6" sx={{ my: 5 }}>
           {title}
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center'}}>
            {details}
          </Typography>
        </Box>
      </Grid>
    )
}

export default ProductDetails
