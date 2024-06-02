import Link from "next/link";
import React from "react";

interface Link {
  desc: string;
  uri: string;
}
interface SideListProps {
  links: Link[];
}

const TopSideList = ({ links }: SideListProps) => {
  return (
    <ul
      className="list-unstyled me-5"
      style={{ paddingTop: "40px", width: "150px" }}
    >
      {links.map((link, index) => (
        // {link}
        <li key={index} className="pb-1">
          <Link
            href={link.uri}
            className="text-decoration-none text-dark"
            style={{ fontSize: "12px" }}
          >
            {link.desc}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TopSideList;
