import React from "react";
import SiteContainer from "../SiteContainer";
import Header from "../Header";
import Footer from "../Footer";
// eslint-disable-next-line
import _ from "../../styles/index.css";

export default ({ children }) => (
  <SiteContainer>
    <Header />
    {children}
    <Footer />
  </SiteContainer>
);
