import React from "react";
import Image from "next/image";
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      className="d-flex flex-column"
      style={{ backgroundColor: "#0F5152" }}
    >
      <div
        className="container-fluid py-3 d-flex justify-content-between"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <div className="d-flex flex-column">
          <a className="navbar-brand text-light fw-bold fs-5 mb-4" href="#">
            Warekana
          </a>
          <a
            className="text-light fw-semibold text-decoration-none fs-6 mb-3"
            href="#"
          >
            Subscribe
          </a>
          <p className="text-light mb-3" style={{ fontSize: "12px" }}>
            Get 10% off your first order
          </p>
          <form className="d-flex pe-2" role="search">
            <input
              className="form-control-sm"
              // style={{ color: "ButtonShadow" }}
              type="search"
              placeholder="Enter your email"
              aria-label="Search"
            />
          </form>
        </div>

        <div className="d-flex flex-column">
          <p className="text-light fw-semibold fs-6  mb-4">Subscribe</p>
          <p className="text-light mb-3" style={{ fontSize: "12px" }}>
            Get 10% off your first order
          </p>
          <p className="text-light mb-3" style={{ fontSize: "12px" }}>
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-light mb-3" style={{ fontSize: "12px" }}>
            warekana.cuisine@gmail.com
          </p>
          <p className="text-light mb-3" style={{ fontSize: "12px" }}>
            +88015-88888-9999
          </p>
        </div>

        <div className="d-flex flex-column">
          <p className="text-light fw-semibold fs-6 mb-4">Account</p>
          <a
            className="text-light text-decoration-none mb-3"
            style={{ fontSize: "12px" }}
            href="#"
          >
            My Account
          </a>
          <a
            className="text-light text-decoration-none mb-3"
            style={{ fontSize: "12px" }}
            href="#"
          >
            Login / Register
          </a>
          <a
            className="text-light text-decoration-none mb-3"
            style={{ fontSize: "12px" }}
            href="#"
          >
            Cart
          </a>
          <a
            className="text-light text-decoration-none mb-3"
            style={{ fontSize: "12px" }}
            href="#"
          >
            Wishlist
          </a>
          <a
            className="text-light text-decoration-none mb-3"
            style={{ fontSize: "12px" }}
            href="#"
          >
            Shop
          </a>
        </div>

        <div className="d-flex flex-column">
          <p className="text-light fw-semibold fs-6 mb-4">Quick Link</p>
          <a
            className="text-light text-decoration-none mb-3"
            style={{ fontSize: "12px" }}
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-light text-decoration-none mb-3"
            style={{ fontSize: "12px" }}
            href="#"
          >
            Terms of Use
          </a>
          <a
            className="text-light text-decoration-none mb-3"
            style={{ fontSize: "12px" }}
            href="#"
          >
            FAQ
          </a>
          <a
            className="text-light text-decoration-none mb-3"
            style={{ fontSize: "12px" }}
            href="#"
          >
            Contact
          </a>
        </div>

        <div className="d-flex flex-column">
          <p className="text-light fw-semibold fs-6 mb-4">Download App</p>
          <p className="text-light mb-2" style={{ fontSize: "10px" }}>
            Save $3 with App New User Only
          </p>
          <div className="mb-3 d-flex">
            <Image
              style={{ marginRight: "5px" }}
              src="/Qrcode.svg"
              width={75}
              height={75}
              alt=""
            />
            <div className="d-flex flex-column">
              <Image
                src="/GooglePlay.svg"
                width={100}
                height={35}
                alt=""
                style={{ marginBottom: "6px" }}
              />
              <Image src="/AppStore.svg" width={100} height={35} alt="" />
            </div>
          </div>
          <div className="d-flex">
            <a
              className="text-light text-decoration-none"
              style={{ fontSize: "12px" }}
              href="https://www.facebook.com/cakra.erlangga.96"
              target="_blank"
            >
              <RiFacebookLine className="text-light text-decoration-none fs-4 me-3" />
            </a>
            <a
              className="text-light text-decoration-none"
              style={{ fontSize: "12px" }}
              href="#"
              target="_blank"
            >
              <RiTwitterLine className="text-light text-decoration-none fs-4 me-3" />
            </a>
            <a
              className="text-light text-decoration-none"
              style={{ fontSize: "12px" }}
              href="#"
              target="_blank"
            >
              <RiInstagramLine className="text-light text-decoration-none fs-4 me-3" />
            </a>
            <a
              className="text-light text-decoration-none"
              style={{ fontSize: "12px" }}
              href="#"
              target="_blank"
            >
              <RiLinkedinLine className="text-light text-decoration-none fs-4" />
            </a>
          </div>
        </div>
      </div>

      <hr className="container-fluid border border-light"></hr>

      <div
        className="container-fluid d-flex justify-content-center text-light"
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
          fontSize: "12px",
        }}
      >
        <p>© Copyright Warekana 2024. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
