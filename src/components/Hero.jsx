import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {heroVideo , smallHeroVideo} from '../utils';
import { useEffect, useState } from "react";
const Hero = () => {
  const [videSrc, setvideSrc] = useState( window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const Handlevideo= () =>{
    if(window.innerWidth < 760){
      setvideSrc(smallHeroVideo)
    }else{
      setvideSrc(heroVideo)
    }
  }
useEffect(()=>{
window.addEventListener ('resize' , Handlevideo);
return () => {
  window.removeEventListener('resize', Handlevideo);
};

},[])


  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
    gsap.to ("#cta",{ opacity: 1, y: -50 ,delay: 1.5 })
  }, []);
  return (
    <section className="w-full h-screen bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p
          id="hero"
          className="hero-text text-gray-100 text-center font-semibold text-3xl opacity-0 max-md:mb-10"
        >
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videSrc}>
           <source src={videSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl"> from $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
