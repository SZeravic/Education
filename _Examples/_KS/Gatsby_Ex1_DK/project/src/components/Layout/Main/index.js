import React from "react";
import { Container } from "components";
import"./styles.module.css";

export default ({ children }) => (
  <main className="Main">
    <Container>{children}</Container>
  </main>
);
