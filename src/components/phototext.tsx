import Image from "next/image";

export default function Phototext({
  img,
  text,
}: {
  img: string;
  text: React.ReactNode;
}) {
  return (

    <div className="w-fit ml-auto bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] rounded-full p-4 flex justify-end">
      <div className="flex items-center gap-4 pr-24">
        <div className="relative h-16 w-16 ">
          <Image
            src={img}
            alt="photo"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <p className="text-3xl text-gray-800">{text}</p>
      </div>
    </div>
  );
}
