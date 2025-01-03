import { useRef, useState, useEffect } from "react";
import Button from "../UI/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentVidIndex, setCurrentVid] = useState(1);
  const [loadedVid, setLoadedVid] = useState(0);
  const nextVidRef = useRef<HTMLVideoElement | null>(null);

  const totalVid = 4;
  const upcomingVid = (currentVidIndex % totalVid) + 1;

  function handleLoadedVid() {
    setLoadedVid((prev) => prev + 1);
  }

  function handleMiniVid() {
    setClicked(true);
    setCurrentVid(upcomingVid);
  }

  useEffect(() => {
    if (loadedVid === totalVid - 1) {
      setLoading(false);
    }
  }, [loadedVid]);

  //   animation to zoom in the next video
  useGSAP(
    () => {
      if (clicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            if (nextVidRef.current) {
              nextVidRef.current.play();
            }
          },
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentVidIndex], revertOnUpdate: true }
  );

  useGSAP(
    () => {
      gsap.set("#video-frame", {
        clipPath: "polygon(24% 0, 73% 0, 90% 90%, 10% 99%)",
        borderRadius: "0% 0% 40% 10%",
      });
      gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0% 0% 0% 0%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });
    },
    { revertOnUpdate: true }
  );

  const getVid = (index: number) => `videos/hero-${index}.mp4`;
  return (
    <main className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-75">
        <div>
          <div
            className="mask-clip-path absolute-center absolute z-50 size-60 cursor-pointer 
          overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVid}
              className="origin-center scale-50 opacity-0 transition-all ease-in
              hover:opacity-100 hover:scale-100 rounded-lg">
              <video
                ref={nextVidRef}
                src={getVid(upcomingVid)}
                loop
                muted
                id="current-video"
                className="object-cover origin-center object-center scale-150 size-64 rounded-lg"
                onLoadedData={handleLoadedVid}
              />
            </div>
          </div>
          <video
            id="next-video"
            ref={nextVidRef}
            src={getVid(currentVidIndex)}
            autoPlay
            loop
            muted
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          />
          <video
            ref={nextVidRef}
            src={getVid(currentVidIndex)}
            autoPlay
            loop
            muted
            onLoadedData={handleLoadedVid}
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-blue-75 z-40">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="absolute top-5 z-40 left-[1.5rem]">
            <h1 className="special-font hero-heading text-blue-100 z">
              Redefi<b>n</b>e
            </h1>
            <p className="mb-2 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame <br /> Unleash the Play Economy
            </p>
            <Button
              text="Watch Trailer"
              id="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 text-black right-5">
        G<b>a</b>ming
      </h1>
    </main>
  );
}
