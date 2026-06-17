import Header from "@/components/layout/header/Header";
import { Button } from "@/components/ui/button";
import Puls from "@/components/ui/Puls";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div className="graph"></div> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full object-cover"
      >
        <source src="/vid/hero_bg.mp4" type="video/mp4" />
      </video>
      <Header></Header>
      <main className=" w-[80%] mx-auto relative z-10 flex flex-col items-center mt-30">
        <h2 className="text-[92px] font-medium text-center text-white">
          Structure Ideas <br /> Into <span className="test">Reality</span>
        </h2>
        <p className={"text-[20px] w-[40%] text-center mt-10 text-white"}>
          Create modern websites faster with Aedifico. Design, structure, and
          manage every page from a single powerful platform.
        </p>
        <div className="flex gap-2">
          <Button size="lg" className={"text-[18px] p-4 py-5 mt-10 capitalize"}>
            click to start
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className={"text-[18px] p-4 py-5 mt-10 capitalize"}
          >
            github repository
          </Button>
        </div>
      </main>
      {/* <Puls></Puls> */}
    </>
  );
}
