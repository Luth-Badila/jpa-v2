import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";

function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Logo" width={30} quality={100} />
      <h1>Jalan Pintas Art</h1>
    </nav>
  );
}

export default Navbar;
