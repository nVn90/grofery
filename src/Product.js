import React from "react";
import { Button } from "react-bootstrap";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <span className="product__offer">25%</span>
      <img
        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_377774.jpg"
        alt=""
      />
      <div className="product__meta">
        <h6 className="product__title">
          Sunfeast Yippee Magic Masala Magic Masala
        </h6>
        <h6 className="price">
          <span className="discounted">$ 2.10</span>
          <span className="mrp text-muted">$ 3.50</span>
        </h6>
        <div className="product__packOffer">2 x 240g</div>
      </div>
      <div className="product__quantity">
        <Button className="btn" block>
          Add
        </Button>{" "}
      </div>
    </div>
  );
}

export default Product;
