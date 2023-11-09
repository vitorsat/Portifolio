"use client";

import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useRef, useState } from "react";
import {
  GithubLogo,
  LinkedinLogo,
  Pause,
  Play,
  WarningOctagon,
} from "phosphor-react";
import { EN, PT } from "@/conts/globalConst";
import { LanguageEN, LanguagePT } from "@/locales/languages";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.volume = 0.1;

      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleChangeLanguage = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  return (
    <main lang={language}>
      <Analytics />
      <audio src={"/resources/song.mp3"} ref={audioRef} loop />
      <video
        src={"/resources/video.mp4"}
        autoPlay
        muted
        loop
        id="myVideo"
        className="
        w-full
        h-full
        absolute
        right-0
        bottom-0
        object-cover
        "
        typeof="video/mp4"
      />
      <div
        className="
        relative 
        bg-gradient-to-r rgba(12,3,51,0.3) rgba(12,3,51,0.3)
        flex
        flex-row
        items-center
        justify-center
        h-screen
        w-full
        text-center
        gap-4
        "
      >
        <div
          className="
        absolute
        top-0
        right-0
        flex
        flex-row
        items-center
        justify-center
        gap-4
        p-4 
         "
        >
          <Image
            onClick={() => handleChangeLanguage(PT)}
            className="
            pointer
          "
            alt="Brasil"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
            width="30"
            height="30"
          />
          <Image
            onClick={() => handleChangeLanguage(EN)}
            className="
            pointer
            "
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            width="30"
            height="30"
          />
          {isPlaying ? (
            <Pause
              size={32}
              onClick={togglePlay}
              style={{
                position: "static",
                top: "1rem",
                right: "1rem",
                cursor: "pointer",
              }}
            />
          ) : (
            <Play
              size={32}
              onClick={togglePlay}
              style={{
                position: "static",
                top: "1rem",
                right: "1rem",
                cursor: "pointer",
              }}
            />
          )}
        </div>
        <div
          className="
           flex
           flex-col
           items-center
            justify-center
            gap-2
            padding-0 30px
           "
        >
          <div
            className="
            flex
            flex-row
            items-center
            justify-center
            gap-2
            "
          >
            <WarningOctagon size={32} style={{ color: "red" }} />
            <p
              className="
              font-bold
              p-0
              border-0
              "
            >
              {language === PT ? LanguagePT.developing : LanguageEN.developing}
            </p>
          </div>
          <h1
            className="
          font-bold
          text-4xl
          "
          >
            Vitor Saturnino
          </h1>
          <p
            className="
          
          text-2xl
          "
          >
            {language === PT
              ? LanguagePT["main.title"]
              : LanguageEN["main.title"]}
          </p>
          <div
            className="
          flex
          flex-row
          "
          >
            <LinkedinLogo
              size={50}
              className="
              pointer
              "
              onClick={() =>
                window.open("https://www.linkedin.com/in/vitorsat/")
              }
            />
            <GithubLogo
              size={50}
              className="
              pointer
              "
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://github.com/vitorsat")}
            />
          </div>
        </div>
      </div>
      <div>
        <footer>
          Video by{" "}
          <a href="https://www.youtube.com/@junaidusman4376" target="_blank">
            @junaidusman4376
          </a>
        </footer>
      </div>
    </main>
  );
}
