import { useRef, useState } from "react";
import Button from "../UI/Button";
import { TiLocationArrow } from "react-icons/ti";

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentVidIndex, setCurrentVid] = useState(1);
  const [loadedVid, setLoadedVid] = useState(0);
  const nextVidRef = useRef(null);

  const totalVid = 3;
  const upcomingVid = (currentVidIndex % totalVid) + 1;

  function handleLoadedVid() {
    setLoadedVid((prev) => prev + 1);
  }

  function handleMiniVid() {
    setClicked(true);
    setCurrentVid(upcomingVid);
  }

  const getVid = (index: number) => `videos/hero-${index}.mp4`;
  return (
    <main className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative h-dvh w-screen overflow-hidden bg-blue-75">
        <div>
          <div
            className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer 
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
                className="object-cover object-center scale-150 rounded-lg size-64"
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
        <h1 className="special-font hero-heading font-red-700 absolute bottom-5 text-blue-75 z-40">
          G<b>a</b>ming
        </h1>
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
        <h1 className="special-font hero-heading font-red-700 absolute bottom-5 text-black">
          G<b>a</b>ming
        </h1>
      </div>
    </main>
  );
}
