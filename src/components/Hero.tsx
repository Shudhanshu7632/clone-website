"use client";

// import Image from "next/image";
import Roundimageheading from "./roundimageheading";

export default function Hero() {
  return (
    <section className="relative w-full pt-40 flex flex-col justify-center">
      <div className="max-w-full mx-20 px-5">
       <Roundimageheading title1="Welcome" title2="again" img="/yellow.webp"/>

        {/* Subtitle */}
        <p className="mt-12 text-3xl  text-gray-500 max-w-full leading-relaxed">
          If you’re{" "}
          <span className="font-semibold text-black">looking for Design</span> –
          you’re at the{" "}
          <span className="font-semibold text-black">right place.</span>
        </p>
        <div className="mt-24 w-full max-w-full rounded-3xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover rounded-2xl"
            src="/heromain/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
