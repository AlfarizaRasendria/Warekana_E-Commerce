import Image from "next/image";
import {
  kitchen,
  adudu,
  gopal,
  masmedunten,
  ijat,
} from "../../../public/about/";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function AboutPage() {
  const devs = [
    { name: "Alfariza Rasendria", position: "Project Manager", img: adudu },
    { name: "Daffa Farhan", position: "Web Developer", img: gopal },
    { name: "Cakra Kusuma", position: "Web Developer", img: ijat },
    { name: "Asyraf Ayassi", position: "ML Engineer", img: masmedunten },
  ];

  return (
    <div>
      <main className="d-flex min-vh-100">
        <section
          className="container d-flex flex-column justify-content-center"
          style={{ width: "40%" }}
        >
          <h1 className="">Our Story</h1>
          <p>
            We are four culinary enthusiasts from Universitas Airlangga, united
            by our passion for preserving Indonesia{"'"}s rich culinary
            heritage. That{"'"}s why we{"'"}ve created this web app to make it
            easier for everyone to savor the delicious and authentic flavors of
            local cuisine from all over the archipelago.
            <br />
            <br />
            Through this platform, we also aim to empower local culinary (UMKM)
            to thrive and reach a wider market. Join us on this culinary
            adventure to celebrate the diversity and vibrancy of Indonesia{"'"}s
            culinary landscape!
          </p>
        </section>
        <div>
          <Image
            src={kitchen}
            alt="kitchen"
            className="object-fit-cover vh-100"
            width={700}
          />
        </div>
      </main>
      <main
        style={{ padding: "6rem 100px 2rem", rowGap:"3rem" }}
        className="d-flex flex-wrap justify-content-around "
      >
        {devs.map((dev, i) => (
          <div className="d-flex flex-column" key={dev.name + i}>
            <Image
              className="object-fit-cover"
              height={600}
              width={600}
              src={dev.img}
              alt={dev.name}
            />
            <h2 style={{ fontWeight: "600" }} className="mt-4">
              {dev.name}
            </h2>
            <h5 style={{ fontWeight: "300" }}>{dev.position}</h5>
            <div style={{ display: "flex", gap: "1.5rem", margin:'1rem 0 0'}}>
              <FaInstagram size={30} color="0F5152" />
              <AiOutlineLinkedin size={30} color="0F5152" />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
