import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      className="bg-info p-3 text-center text-white text-uppercase fixed-bottom"
    >
      Blog application using express and react
    </Container>
  );
};

export default Footer;
