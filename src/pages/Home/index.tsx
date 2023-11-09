'use client';

import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useRef, useState } from 'react';
import { GithubLogo, LinkedinLogo, Pause, Play, WarningOctagon } from 'phosphor-react';
import { EN, Github, PT, SvgBrFlag, SvgEuaFlag, LinkedIN, YoutubeBaseVideoUrl } from '@/consts/globalConst';
import { ContainerInfos, Header, IconAlertContainer, MainContainer, VideoStyled } from '../../styles/Home/styles';
import { getLanguage } from '@/locales/languages';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    setLanguage(navigator.language);
  }, []);

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
    <>
      <Analytics />
      <audio src={'/resources/song.mp3'} ref={audioRef} typeof="audio/mp3" loop />
      <VideoStyled src={'/resources/video.mp4'} autoPlay muted loop id="myVideo" typeof="video/mp4" />
      <MainContainer>
        <Header>
          <Image onClick={() => handleChangeLanguage(PT)} alt="Brasil" src={SvgBrFlag} width="30" height="30" />
          <Image onClick={() => handleChangeLanguage(EN)} alt="United States" src={SvgEuaFlag} width="30" height="30" />
          {isPlaying ? <Pause size={32} onClick={togglePlay} /> : <Play size={32} onClick={togglePlay} />}
        </Header>
        <ContainerInfos>
          <IconAlertContainer>
            <WarningOctagon size={32} style={{ color: 'red' }} />
            <p>{getLanguage(language)['developing']}</p>
          </IconAlertContainer>
          <h1>Vitor Saturnino</h1>
          <p>{getLanguage(language)['main.title']}</p>
          <div>
            <LinkedinLogo size={50} onClick={() => window.open(LinkedIN)} />
            <GithubLogo size={50} onClick={() => window.open(Github)} />
          </div>
        </ContainerInfos>
      </MainContainer>
      <div>
        <footer>
          Video by
          <a href={YoutubeBaseVideoUrl} target="_blank">
            @junaidusman4376
          </a>
        </footer>
      </div>
    </>
  );
}
