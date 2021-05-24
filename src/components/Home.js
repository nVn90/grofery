import React from "react";
import "./Home.css";
import { Container } from "@material-ui/core";
import { Button } from "react-bootstrap";
import Product from "../Product";

function Home() {
  return (
    <div className="home">
      <Container className="text-center">
        <div className="home__header d-flex justify-content-between">
          <h1>Top Savers</h1>
          <Button className="btn">See all</Button>{" "}
        </div>
        <div className="home__productContainer">
          <div className="home__productSectionOne">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
