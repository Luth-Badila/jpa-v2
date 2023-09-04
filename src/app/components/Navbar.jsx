import React from "react";

import Image from "next/image";
import Logo from "../../../public/logo.png";

function Navbar() {
  return (
    <nav className="p-5 flex gap-2 items-center">
      <Image src={Logo} alt="Logo" width={40} quality={100} />
      <h1 className="text-xl font-semibold">Jalan Pintas Art</h1>
    </nav>
  );
}

export default Navbar;
