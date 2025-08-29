import Image from "next/image";
import React from "react";

export default function Roundimageheading({
  title1,
  title2,
  img,
}: {
  title1?: string;
  title2?: string;
  img?: string;
}) {
  return (
    <div>
      {/* Heading */}
      <h1 className="flex text-8xl  font-bold text-black gap-5">
        {title1}
        {/* Oval Image */}
        <span className="relative inline-block  h-24 w-40 rounded-full overflow-hidden bg-[#FFE793] shadow-md">
          <Image
            src={img || "/profile.jpg"}
            alt="Profile"
            fill
            className="object-cover object-center"
          />
        </span>
        {title2}
      </h1>
    </div>
  );
}
