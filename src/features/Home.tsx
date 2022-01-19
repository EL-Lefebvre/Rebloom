import * as React from "react";
import MainAppBar from "./modules/views/MainAppBar";
import MainAppFooter from "./modules/views/MainAppFooter";
import ProductCategories from "./modules/views/ProductCategories";
import ProductCTA from "./modules/views/ProductCTA";
import ProductHero from "./modules/views/ProductHero";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import ProductValues from "./modules/views/ProductValues";
import withRoot from "./withRoot";

function Index() {
  return (
    <React.Fragment>
      <MainAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />

      <ProductCTA />
      <ProductSmokingHero />
      <MainAppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
