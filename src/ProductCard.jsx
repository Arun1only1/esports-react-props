import React from "react";

const ProductCard = (props) => {
  return (
    <div
      style={{
        width: "25%",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "1rem",
      }}
    >
      <img src={props.image} alt="" width="100%" height="300px" />

      <h3 style={{ color: "green" }}>{props.name}</h3>

      <h4 style={{ color: props.price > 50000 ? "red" : "blue" }}>
        Rs.{props.price}
      </h4>
    </div>
  );
};

export default ProductCard;
