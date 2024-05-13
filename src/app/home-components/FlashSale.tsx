import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
import ProductCard from "../components/ProductCard";

const FlashSale = () => {
  let flashSaleProducts = [
    {
      discount: 40,
      img: "/home-resource/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
    {
      discount: 40,
      img: "/home-resource/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
    {
      discount: 40,
      img: "/home-resource/cheeseburger-png.png",
      productName: "Cheese Burger",
      price: 25,
      soldAmount: 88,
      uri: "#",
    },
    {
      discount: 40,
      img: "/home-resource/cheeseburger-png.png",
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
          Today's
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
          className="d-flex flex-row align-items-end"
          style={{ marginTop: "25px", width: "100%" }}
        >
          <div className="d-flex align-items-end">
            <p
              className="fs-3 fw-bold"
              style={{ marginRight: "75px", lineHeight: "0.5" }}
            >
              Flash Sales
            </p>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <p style={{ fontSize: "10px", lineHeight: "0.5" }}>Days</p>
                <p
                  className="fw-bold"
                  style={{ lineHeight: "0.5", fontSize: "22px" }}
                >
                  03
                </p>
              </div>
              <p
                className="mx-2"
                style={{
                  lineHeight: "0.5",
                  marginTop: "20px",
                  fontSize: "22px",
                }}
              >
                :
              </p>
              <div className="d-flex flex-column">
                <p style={{ fontSize: "10px", lineHeight: "0.5" }}>Hours</p>
                <p
                  className="fw-bold"
                  style={{ lineHeight: "0.5", fontSize: "22px" }}
                >
                  23
                </p>
              </div>
              <p
                className="mx-2"
                style={{
                  lineHeight: "0.5",
                  marginTop: "20px",
                  fontSize: "22px",
                }}
              >
                :
              </p>
              <div className="d-flex flex-column">
                <p style={{ fontSize: "10px", lineHeight: "0.5" }}>Minutes</p>
                <p
                  className="fw-bold"
                  style={{ lineHeight: "0.5", fontSize: "22px" }}
                >
                  19
                </p>
              </div>
              <p
                className="mx-2"
                style={{
                  lineHeight: "0.5",
                  marginTop: "20px",
                  fontSize: "22px",
                }}
              >
                :
              </p>
              <div className="d-flex flex-column">
                <p style={{ fontSize: "10px", lineHeight: "0.5" }}>Seconds</p>
                <p
                  className="fw-bold"
                  style={{ lineHeight: "0.5", fontSize: "22px" }}
                >
                  56
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Slider */}
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%", marginTop: "25px", marginBottom: "25px" }}
        >
          {/* Card */}
          <ProductCard products={flashSaleProducts} />
        </div>

        <Link
          href={""}
          className="m-auto text-decoration-none text-light p-2 rounded"
          style={{ backgroundColor: "#DB4444" }}
        >
          View All Products
        </Link>
      </div>
    </>
  );
};

export default FlashSale;
