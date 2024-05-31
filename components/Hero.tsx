import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { FaLocationArrow } from "react-icons/fa6";
import { SparklesCore } from "./ui/Sparkles";
import { Meteors } from "./ui/Meteors";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="top-0 left-20 md:left-40 lg:top-10 lg:left-50 h-screen"
        fill="blueviolet"
      ></Spotlight>
      <Spotlight
        className="top-0 left-full md:left-full lg:top-16 lg:left-full h-[80vh] w-[70vw]"
        fill="mediumpurple"
      ></Spotlight>
      <Spotlight
        className="top-0 left-28 md:-top-1 md:left-48 lg:top-28 lg:left-80 h-[80vh] w-[70vw]"
        fill="dodgerblue"
      ></Spotlight>

      {/* Sparkles */}
      <div className="absolute top-0 left-0 w-full h-[100vh]">
        <div className="flex justify-center animate-fade-in-down">
          {/* Top Gradients */}
          <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[8px] w-3/4 blur-sm" />
          <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4" />
          <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[10px] w-1/4 blur-sm" />
          <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[4px] w-1/4" />
        </div>

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={25}
          className="w-full h-full"
          speed={1.5}
        />
      </div>

      <Meteors number={3} />

      {/* Box Background */}
      {/* <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div> */}

      <div className="flex justify-start relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center gap-5">
          <h2 className="animate-fade-in-up tracking-widest text-sm text-left text-blue-100 max-w-80">
            <span style={{ color: "mediumpurple" }}>Hi,</span> my name is
          </h2>

          <div className="animate-fade-in-up font-bold leading-snug tracking-wide text-left text-[40px] md:text-5xl lg:text-6xl">
            Mohammed Waqar Ali<span style={{ color: "mediumpurple" }}>.</span>
          </div>

          <div className="animate-fade-in-up font-bold leading-snug tracking-wide text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I am a{" "}
            <span style={{ color: "mediumpurple" }}>Frontend Developer</span>{" "}
            with <span style={{ color: "mediumpurple" }}>5 years</span> of
            experience.
          </div>

          <a className="animate-fade-in-up" href="#about">
            <MagicButton
              title="About me"
              icon={<FaLocationArrow />}
              position="right"
            ></MagicButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
