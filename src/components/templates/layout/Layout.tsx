import React, { FunctionComponent } from "react";
import Container from "@/components/templates/container/Container";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
