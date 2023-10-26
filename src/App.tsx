import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Pause,
  Play,
  WarningOctagon,
} from "phosphor-react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import video from "./assets/video.mp4";
import song from "./assets/song.mp3";
import { useEffect, useRef, useState } from "react";
import "./locales/i18n";
import { useTranslation } from "react-i18next";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

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
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <Analytics />
      <audio src={song} ref={audioRef} loop />
      <video
        src={video}
        autoPlay
        muted
        loop
        id="myVideo"
        className="myVideo"
        typeof="video/mp4"
      />
      <main
        style={{
          position: "relative",
          backgroundImage:
            "linear-gradient(rgba(12,3,51,0.3), rgba(12,3,51,0.3)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
          textAlign: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <img
            onClick={() => handleChangeLanguage("pt")}
            style={{
              color: language === "pt" ? "#747d8c" : "white",
              cursor: "pointer",
            }}
            alt="Brasil"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
            width="30"
          />
          <img
            onClick={() => handleChangeLanguage("en")}
            style={{
              color: language === "en" ? "#747d8c" : "white",
              cursor: "pointer",
            }}
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            width="30"
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0px 30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <WarningOctagon size={32} style={{ color: "red" }} />
            <p
              style={{
                fontWeight: "bold",
                padding: 0,
                border: 0,
              }}
            >
              {" "}
              {t("developing")}
            </p>
          </div>
          <h1>Vitor Saturnino</h1>
          <p>{t("main.title")}</p>
          <div>
            <LinkedinLogo
              size={50}
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/vitorsat/")
              }
            />
            <GithubLogo
              size={50}
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://github.com/vitorsat")}
            />
            <InstagramLogo
              size={50}
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.instagram.com/_vitormiguell/")
              }
            />
          </div>
          <footer>
            Video by{" "}
            <a href="https://www.youtube.com/@junaidusman4376" target="_blank">
              @junaidusman4376
            </a>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
