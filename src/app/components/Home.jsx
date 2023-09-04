import React from "react";
import Image from "next/image";
import Tee from "../../../public/bajuPutih.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-green-700">
      <div className="flex lg:flex-row flex-col justify-between p-5 lg:gap-0 gap-5">
        <div className="flex flex-col gap-8 self-center">
          <h1 className=" font-semibold text-white lg:text-5xl text-3xl uppercase">Kami menyediakan jasa sablon sesuai kebutuhan anda dengan harga terjangkau</h1>
          <p className="lg:text-xl text-md text-white">
            Jalan Pintas Art merupakan vendor UMKM yang bergerak dalam bidang sablon dan konveksi ynag menyediakan kebutuhan untuk komunitas, perorangan maupun apparel clothing, kami juga merupakan sponsor untuk beberapa event universitas
          </p>
          <button className="rounded-md w-[150px] p-3 text-center bg-green-500 text-white">Hubungi Kami</button>
        </div>
        <Image src={Tee} width={400} />
      </div>
    </div>
  );
}
