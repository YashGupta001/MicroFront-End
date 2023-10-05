import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </StylesProvider>
  );
};
