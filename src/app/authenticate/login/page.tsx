import Image from "next/image";
import phoneChart from "../../../../public/PhoneCart.png";
import Input from "../../components/Input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="d-flex align-items-center ">
      <div className="">
        <Image src={phoneChart} alt="" />
      </div>

      <section className="d-flex container-fluid justify-content-center">
        <form action="" className="">
          <h1>Login to Exclusive</h1>
          <p>Enter your details below</p>
          <div className="d-flex flex-column mt-5">
            <Input type="email" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Password" />
          </div>
          <div className="d-flex flex-column justify-content-between items-center mt-4">
            <button
              className="btn px-5 py-3"
              style={{ backgroundColor: "#DB4444", color: "white" }}
            >
              Login
            </button>
            <Link
              href="/authenticate/register"
              className="btn btn-link"
              style={{ color: "#DB4444", textDecoration: "none" }}
            >
              or Register
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
