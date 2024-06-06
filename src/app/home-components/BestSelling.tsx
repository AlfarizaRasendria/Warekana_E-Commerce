import Link from "next/link";
import React from "react";
import ProductCard from "../components/ProductCard";

const BestSelling = () => {
  let bestSellingProducts = [
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
          This Month
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          className="d-flex flex-row align-items-center justify-content-between"
          style={{ marginTop: "25px", width: "100%" }}
        >
          <p
            className="fs-3 fw-bold"
            style={{ marginRight: "75px", lineHeight: "0.5" }}
          >
            Best Seling Products
          </p>
          <Link
            href={""}
            className="text-decoration-none text-light py-3 px-4 rounded"
            style={{ backgroundColor: "#DB4444" }}
          >
            View All
          </Link>
        </div>

        {/* Card Slider */}
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%", marginTop: "40px" }}
        >
          {/* Card */}
          <ProductCard products={bestSellingProducts} />
        </div>
      </div>
    </>
  );
};

export default BestSelling;
