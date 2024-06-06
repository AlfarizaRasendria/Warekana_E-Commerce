import Link from "next/link";
import React from "react";
import { CiBowlNoodles } from "react-icons/ci";
import { CiPizza } from "react-icons/ci";
import { RiDrinksLine } from "react-icons/ri";

interface CategoryDetail {
  imgLabel: string;
  categoryLabel: string;
  uri: string;
}

interface CategoryProps {
  categories: CategoryDetail[];
}

const Categories = ({ categories }: CategoryProps) => {
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
          Categories
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
          Browse By Category
        </p>

        <div
          className="d-flex justify-content-evenly"
          style={{ width: "100%", marginTop: "25px", marginBottom: "25px" }}
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              className="d-flex justify-content-between text-decoration-none text-dark"
              href={category.uri}
            >
              <div
                className="d-flex flex-column justify-content-center align-items-center border border-dark rounded"
                style={{ width: "200px", height: "180px" }}
              >
                <CiBowlNoodles style={{ fontSize: "75px" }} />
                <p style={{ fontSize: "15px" }}>{category.categoryLabel}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
