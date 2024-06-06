import styles from "./cart.module.css";
import Image from "next/image";
import pz from "../../../public/cart/pz.png";
import Link from "next/link";

export default function CartPage() {
  return (
    <main style={{ margin: "3rem 100px" }}>
      <Link href="/auth/login" style={{ margin: "0 3rem" }}>
        Back
      </Link>
      <form action="" className={styles.formContainer}>
        <div
          className="itemList"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginTop: "1rem",
          }}
        >
          <div className={[styles.item, "fw-semibold"].join(" ")}>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          <div className={styles.item}>
            <div className={styles.product}>
              <Image src={pz} alt="pz" width={80} height={80} />
              Yumy Pizza
            </div>
            <div>$650</div>
            <div>
              <input type="number" />
            </div>
            <div>${650 * 3}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.product}>
              <Image src={pz} alt="pz" width={80} height={80} />
              Yumy Pizza
            </div>
            <div>$650</div>
            <div>
              <input type="number" />
            </div>
            <div>${650 * 3}</div>
          </div>
        </div>
        <div className={styles.summary}>
          <h3 style={{ marginBottom: "2rem" }}>Cart Total</h3>
          <div className={styles.summaryItem}>
            <p>Subtotal</p>
            <p>$1750</p>
          </div>
          <hr />
          <div className={styles.summaryItem}>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr />
          <div className={styles.summaryItem}>
            <p>Total</p>
            <p>$1750</p>
          </div>
        </div>
        <button
          className="btn px-5 py-3"
          style={{ backgroundColor: "#DB4444", color: "white", width:"max-content", alignSelf:"flex-end", marginTop:"1rem" }}
        >
          Proceed to checkout
        </button>
      </form>
    </main>
  );
}
