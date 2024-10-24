import TopSideList from "./home-components/TopSideList";
import FlashSale from "./home-components/FlashSale";
import Categories from "./home-components/Categories";
import BestSelling from "./home-components/BestSelling";
import Recommendations from "./home-components/Recommendations";
import SliderInfo from "./home-components/SliderInfo";


export default function Home() {
  let links = [
    { desc: "Woman's Fashion", uri: "/fashion/women" },
    { desc: "Men's Fashion", uri: "/fashion/men" },
    { desc: "Electronics", uri: "/electronics" },
    { desc: "Home & Lifestyle", uri: "/home-lifestyle" },
    { desc: "Medicine", uri: "/medicine" },
    { desc: "Sports & Outdoor", uri: "/sports-outdoor" },
    { desc: "Baby's Toys", uri: "/babys-toys" },
    { desc: "Groceries & Pets", uri: "/groceries-pets" },
    { desc: "Health & Beauty", uri: "/health-beauty" },
  ];

  let categories = [
    {
      imgLabel: "",
      categoryLabel: "Local Foods",
      uri: "#",
    },
    {
      imgLabel: "",
      categoryLabel: "International Foods",
      uri: "#",
    },
    {
      imgLabel: "",
      categoryLabel: "Drinks",
      uri: "#",
    },
  ];

  let banners = [
    {
      productName: "",
      promote: "string",
      uri: "string",
      img: "string",
    },
  ];

  return (
    <div
      style={{ paddingTop: "50px", paddingLeft: "0", paddingRight: "0" }}
      className="container-fluid"
    >
      <div className="container-fluid border border-1 border-dark"></div>

      <div
        className="d-flex"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        {/* (Maybe) Food Categories Link */}
        <TopSideList links={links}></TopSideList>

        <div
          className="border border-1 border-dark"
          style={{
            top: "0",
            right: "0",
            height: "285px",
            borderRight: "2px solid black",
          }}
        ></div>

        <SliderInfo />
      </div>

      <div
        className="d-flex flex-column"
        style={{
          marginTop: "75px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        {/* Flash Sale Catalog */}
        <FlashSale />

        <hr
          className="container-fluid border border-dark"
          style={{ marginTop: "75px", marginBottom: "75px" }}
        ></hr>

        {/* Product Categories */}
        <Categories categories={categories} />

        <hr
          className="container-fluid border border-dark"
          style={{ marginTop: "75px", marginBottom: "75px" }}
        ></hr>

        {/* Best Selling Catalog */}
        <BestSelling />

        <hr
          className="container-fluid border border-dark"
          style={{ marginTop: "75px", marginBottom: "75px" }}
        ></hr>

        {/* Recommendations */}
        <Recommendations />
      </div>
    </div>
  );
}
