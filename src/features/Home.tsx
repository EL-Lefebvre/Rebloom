import * as React from "react";
import withRoot from "./withRoot";

const ProductCategories = React.lazy(
  () => import("./modules/views/ProductCategories")
);
const MainAppBar = React.lazy(() => import("./modules/views/MainAppBar"));
const ProductCTA = React.lazy(() => import("./modules/views/ProductCTA"));
const ProductHero = React.lazy(() => import("./modules/views/ProductHero"));
const ProductSmokingHero = React.lazy(
  () => import("./modules/views/ProductSmokingHero")
);
const ProductValues = React.lazy(() => import("./modules/views/ProductValues"));

function Index() {
  return (
    <React.Fragment>
      <MainAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductCTA />
      <ProductSmokingHero />
    </React.Fragment>
  );
}

export default withRoot(Index);
