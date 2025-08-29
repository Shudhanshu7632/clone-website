import Hero from "@/components/Hero";
import Phototext from "@/components/phototext";

export default function Home() {
  return (
    <main className="pb-24">
      <Hero />
      <section>
        <div className="mt-32 h-full px-16 font-Urbanist max-w-full mx-20">
          <h2 className="pt-20 flex flex-col gap-5 text-5xl font-light text-black max-w-full ">
            Since 2015, our solutions have been trusted by
            <div className=" flex items-center gap-2 ">
              <span className="  relative inline-block h-20 w-25 rounded-full overflow-hidden bg-blue-700 shadow-md"></span>
              Samsung,
              <span className="  relative inline-block h-20 w-25 rounded-full overflow-hidden bg-red-600 shadow-md"></span>
              Huawai,
              <span className="  relative inline-block h-20 w-25 rounded-full overflow-hidden bg-black shadow-md"></span>
              Kohler,
              <span className="  relative inline-block h-20 w-25 rounded-full overflow-hidden bg-red-600 shadow-md"></span>
              Colgate,
            </div>
            <div className=" flex items-center gap-2 mt-2">
              <span className="  relative inline-block h-18 w-20 rounded-full overflow-hidden bg-[#2A3455] shadow-md"></span>
              Fox Sports,
              <span className="  relative inline-block h-20 w-25 rounded-full overflow-hidden bg-[#064A93] shadow-md"></span>
              Ford,
            </div>
            <p className=" text-4xl font-bold text-black">and so can you</p>
          </h2>
        </div>
      </section>
      <div className="pt-40 mt-32  h-full max-w-full pl-28  ">
        <h2 className="text-8xl gap-3 ml-6 w-[80%]">
          “ Are they the ones who can help me
        </h2>
      </div>
      <div className="mt-12 max-w-full flex justify-end pr-40 ">
      <Phototext
        img="/yellow.webp"
        text="See for yourself! Take a look at"
      />
      </div>
    </main>
  );
}