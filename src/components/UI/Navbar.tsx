import { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

export default function Navbar() {
  const { y: currentScrollY } = useWindowScroll();
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const [indicatorActive, setIndicatorActive] = useState(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const audioButton = () => {
    setIsAudioPlay((prev) => !prev);
    setIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (audioElementRef.current) {
      if (isAudioPlay) {
        audioElementRef.current.play();
      } else {
        audioElementRef.current.pause();
      }
    }
  }, [isAudioPlay]);

  useEffect(() => {
    // const currentScrollY = window.scrollY;
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current &&
        navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current &&
        navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current &&
        navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <main
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <header className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              text="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </header>
          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn">
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={audioButton}
              className="ml-10 flex items-center space-x-0.5">
              {" "}
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: indicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </div>
    </main>
  );
}
