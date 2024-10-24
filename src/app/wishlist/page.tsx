import ProductCard from "../components/ProductCard/ProductCard";
import { BsTrash3 } from "react-icons/bs";

const WislistPage = () => {
  return (
    <main style={{ margin: "3rem 100px", minHeight: "100vh" }}>
      <div
        className="d-flex"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <h5>Wishlist (4)</h5>
        <button
          className="btn"
          style={{ padding: "1rem 2rem", border: "1px solid black" }}
        >
          Move All to Bag
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          justifyItems: "center",
        }}
      >
        <ProductCard name="Pizza Yummy" price={960} discount={25} icon={<BsTrash3 color="#0F5152" size={20}/>}></ProductCard>
      </div>
      <div
        className="d-flex"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          margin: "2rem 0 1rem",
        }}
      >
        <h5>Just For You</h5>
        <button
          className="btn"
          style={{ padding: "1rem 2rem", border: "1px solid black" }}
        >
          See All
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          justifyItems: "center",
        }}
      >
        <ProductCard name="Pizza Yummy" price={960}></ProductCard>
      </div>
      <div
        style={{
          margin: "1.5rem 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          className="btn"
          style={{ padding: "1rem 2rem", border: "1px solid black" }}
        >
          Return to Shop
        </button>
        <button
          className="btn"
          style={{
            padding: "1rem 2rem",
            color: "white",
            backgroundColor: "#DB4444",
          }}
        >
          Add to Chart
        </button>
      </div>
    </main>
  );
};

export default WislistPage;
