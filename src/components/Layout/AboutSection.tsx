import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../UI/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);
export default function AboutSection() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        pin: true, // pin the trigger element while active
        start: "center center ", // when the center of the trigger hits the center of the viewport
        end: "+=800 center", // end after scrolling 800px beyond the center
        scrub: 0.5, // smooth scrubbing, takes 0.5 second to "catch up" to the scrollbar
        pinSpacing: true, //to prevent other component from scrolling under

        // end
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <main id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase">Welcome to Zentry</p>
        <AnimatedTitle
          title="disc<b>o</b>ver the world's largest shared <b>a</b>dventure"
          containerClass="!text-black"
        />
        <div className="about-subtext">
          <p>The Metagame begins-yourlife, now an epic MMORPG</p>
          <p>
            Zentry bridges player networks, agent AI and blockchains into a
            unified play economyu
          </p>
        </div>
      </div>
      <section className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
