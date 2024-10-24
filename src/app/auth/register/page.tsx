import Image from "next/image";
import phoneChart from "../../../../public/PhoneCart.png";
import Input from "../../components/Input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="d-flex align-items-center ">
      <div className="">
        <Image src={phoneChart} alt="" />
      </div>

      <section className="d-flex container-fluid justify-content-center">
        <form action="" className="">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <div className="d-flex flex-column mt-5">
            <Input type="text" name="name" placeholder="Name" />
            <Input type="email" name="email" placeholder="Email" />
            <Input type="text" name="phone" placeholder="Phone Number" />
            <Input type="password" name="password" placeholder="Password" />
            <Input
              type="password"
              name="password2"
              placeholder="Confirm Password"
            />
          </div>
          <div className="d-flex flex-column justify-content-between align-items-center mt-4">
            <button
              className="btn px-5 py-3 w-100"
              style={{ backgroundColor: "#DB4444", color: "white" }}
            >
              <a>Register</a>
            </button>
            <p className="mt-4">Already have account?</p>
            <Link href="/auth/login">login</Link>
          </div>
        </form>
      </section>
    </main>
  );
}
