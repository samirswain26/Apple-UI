import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel";


const Highlights = () => {
  useGSAP(()=>{
gsap.to("#title", { opacity: 1, y: 0 });
gsap.to("#link", { opacity: 1, y: 0,  duration:1, stagger :0.25});

  },[])
  return (
    <section
      id="hightligts"
      className="w-screen overflow-hidden h-full common-padding bg-zinc-900"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end md:flex justify-between">
          <h1 id="title" className="text-gray max-w-md text-xl md:text-xl font-semibold opacity-0 translate-y-[100px]">Get The Highlights</h1>
          <div className=" flex flex-wrap items-end gap-5">
                <p id="link" className=" text-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">watch the Film
                  <img src={watchImg} alt="watch" className="ml-2" />
                </p>
                <p id="link" className=" text-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">watch the Event
                  <img src={rightImg} alt="watch" className="ml-2" />
                </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;
