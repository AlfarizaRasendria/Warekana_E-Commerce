import React from "react";
import ProductCard from "../components/ProductCard";

const Recommendations = () => {
  let productRecomendations = [
    {
      discount: 40,
      img: "/home/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
    {
      discount: 40,
      img: "/home/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
    {
      discount: 40,
      img: "/home/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
    {
      discount: 40,
      img: "/home/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
    {
      discount: 40,
      img: "/home/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
    {
      discount: 40,
      img: "/home/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
    {
      discount: 40,
      img: "/home/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
    {
      discount: 40,
      img: "/home/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
  ];

  return (
    <>
      <div className="d-flex align-items-center">
        <div
          className="me-2"
          style={{
            width: "13px",
            height: "25px",
            backgroundColor: "#DB4444",
            borderRadius: "3px",
          }}
        ></div>
        <span
          style={{ fontSize: "12px", fontWeight: "bold", color: "#DB4444" }}
        >
          Our Products
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <p
          className="fs-3 fw-bold"
          style={{ marginTop: "25px", width: "100%" }}
        >
          Recomendation Products
        </p>

        <div></div>
      </div>

      <div className="container" style={{ marginTop: "25px" }}>
        <div className="row space-between g-4">
          {productRecomendations.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <ProductCard products={[product]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommendations;
