import pz from "../../../../public/cart/pz.png";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";

interface Props {
  name: string;
  price: number;
  discount?: number;
  icon?: React.ReactNode;
}

interface PriceTagProps {
  price: number;
  disccount?: number;
}

const ProductCard = ({ name, price, discount, icon }: Props) => {
  return (
    <div style={{ maxWidth: "fit-content", position: "relative" }}>
      {discount && (
        <div
          className="discount"
          style={{
            position: "absolute",
            left: ".8rem",
            top: ".8rem",
            backgroundColor: "#DB4444",
            color: "white",
            width: "max-content",
            padding: "4px 12px",
            borderRadius: "6px",
          }}
        >
          -{discount}%
        </div>
      )}
      {icon && (
        <div
          style={{
            position: "absolute",
            right: ".8rem",
            top: ".8rem",
            backgroundColor: "white",
            color: "white",
            width: "max-content",
            padding: "8px 8px",
            borderRadius: "100px",
          }}
        >
          {icon}
        </div>
      )}

      <Image
        src={pz}
        alt=""
        width={270}
        height={220}
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          backgroundColor: "#0F5152",
          padding: "1rem 0",
          borderRadius: "0 0 6px 6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.8rem",
        }}
      >
        <BsCart3 size={24} color="white" />
        <p style={{ color: "white", margin: "0", fontWeight: "300" }}>
          Add to cart
        </p>
      </div>
      <h6 style={{ marginTop: "1rem", marginBottom: "0.4rem", padding: "0" }}>
        {name}
      </h6>
      <PriceTag price={price} disccount={discount} />
    </div>
  );
};

const PriceTag = ({ price, disccount }: PriceTagProps) => {
  if (disccount) {
    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        <p style={{ color: "#DB4444", padding: "0" }}>
          ${price * disccount * 0.01}
        </p>
        <p
          style={{
            color: "#0F5152",
            padding: "0",
            textDecoration: "line-through",
          }}
        >
          ${price}
        </p>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <p style={{ color: "#DB4444", padding: "0" }}>${price}</p>
    </div>
  );
};

export default ProductCard;
