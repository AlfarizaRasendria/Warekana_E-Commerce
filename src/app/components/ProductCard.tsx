import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";

interface ProductDetail {
  discount: number;
  img: string;
  productName: string;
  price: number;
  soldAmount: number;
  uri: string;
}

interface ProductProps {
  products: ProductDetail[];
}

const ProductCard = ({ products }: ProductProps) => {
  return (
    <>
      {products.map((product, index) => (
        <div key={index} style={{ width: "250px", height: "auto" }}>
          {/* Image */}
          <div
            style={{
              height: "200px",
              width: "100%",
              backgroundColor: "#F5F5F5",
            }}
            className=" position-relative d-flex justify-content-center align-items-start overflow-hidden rounded"
          >
            <div
              className="position-absolute d-flex align-items-top justify-content-between p-2"
              style={{ zIndex: "2", width: "100%" }}
            >
              <div
                className="d-flex justify-content-center align-items-center p-1 rounded text-light"
                style={{
                  fontSize: "12px",
                  backgroundColor: "#DB4444",
                  height: "25px",
                }}
              >
                -{product.discount}%
              </div>
              <div className="d-flex flex-column">
                <Link
                  className="w-1 h-1 text-decoration-none text-dark rounded-circle p-1 bg-light"
                  href={""}
                >
                  <IoHeartOutline />
                </Link>
                <Link
                  className="w-1 h-1 text-decoration-none text-dark rounded-circle p-1 bg-light"
                  href={""}
                >
                  <IoEyeOutline />
                </Link>
              </div>
            </div>
            <div
              className="position-absolute d-flex justify-content-center align-items-center"
              style={{ zIndex: "1", width: "100%", height: "100%" }}
            >
              <Image src={product.img} alt={""} width="150" height="150" />
            </div>
          </div>

          {/* Desc */}
          <Link className="text-decoration-none" href={product.uri}>
            <p
              className="mt-2 mb-0 fw-semibold text-dark"
              style={{ fontSize: "15px" }}
            >
              {product.productName}
            </p>
            <div className="mt-1">
              <span
                className="me-2 text-danger fw-medium"
                style={{ fontSize: "15px" }}
              >
                $20
              </span>
              <span
                className="text-decoration-line-through fw-medium text-dark"
                style={{ fontSize: "15px" }}
              >
                ${product.price}
              </span>
            </div>

            {/* Ratings */}
            <div className="d-flex align-items-center mt-1">
              <div className="d-flex me-2">
                <FaStar style={{ fontSize: "15px", color: "#FFAD33" }} />
                <FaStar style={{ fontSize: "15px", color: "#FFAD33" }} />
                <FaStar style={{ fontSize: "15px", color: "#FFAD33" }} />
                <FaStar style={{ fontSize: "15px", color: "#FFAD33" }} />
                <FaStar style={{ fontSize: "15px", color: "#FFAD33" }} />
              </div>
              <span
                className="fw-medium text-secondary"
                style={{ fontSize: "15px" }}
              >
                ({product.soldAmount})
              </span>
            </div>
          </Link>
        </div>
      ))}
      {/* {products.map((product, index) => {})} */}
    </>
  );
};

export default ProductCard;
