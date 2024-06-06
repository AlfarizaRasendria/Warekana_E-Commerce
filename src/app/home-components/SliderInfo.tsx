import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

interface BannerDetail {
  productName: String;
  promote: String;
  uri: String;
  img: String;
}

interface BannerProps {
  banner: BannerDetail[];
}

const SliderInfo = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slideToShow: 1,
    slideToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    autoplay: true,
  };
  return (
    <div
      className="pt-5 ps-5 container-fluid overflow-hidden position-relative"
      style={{ height: "285px" }}
    >
      {/* <Slider {...settings}>{banner.map((banner, index) => {})}</Slider> */}
      <div
        className="container-fluid d-flex justify-content-center align-items-center overflow-hidden"
        style={{ height: "250px" }}
      >
        <div
          className="container-fluid position-absolute d-flex align-items-start h-auto flex-column"
          style={{ paddingLeft: "75px" }}
        >
          <p className="text-light fw-medium">Burger Bangor</p>
          <p className="text-light fw-semibold fs-1">Kejar diskon 50%!!</p>
          <Link className="text-light fw-light" href={""}>
            <p>Beli Sekarang -{">"}</p>
          </Link>
        </div>
        <Image
          className="d-block"
          src={"/home/burger-banner.jpg"}
          width={2000}
          height={500}
          alt={"#"}
        />
      </div>
    </div>
  );
};

export default SliderInfo;
