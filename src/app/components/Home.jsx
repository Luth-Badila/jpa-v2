import React from "react";
import Image from "next/image";
import Tee from "../../../public/bajuPutih.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="text-4xl font-semibold p-[10px] text-white">Welcome to Jalan Pintas Art</div>
      <Image src={Tee} width={300} />
    </div>
  );
}
