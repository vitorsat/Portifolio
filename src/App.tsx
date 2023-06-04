import { GithubLogo, InstagramLogo, LinkedinLogo, Pause, Play, WarningOctagon } from "phosphor-react"
import './App.css'
import { Analytics } from '@vercel/analytics/react';
import video from './assets/video.mp4'
import song from './assets/song.mp3'
import { useEffect, useRef, useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null);

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
    setIsPlaying(!isPlaying)
  }

  return (
    <>
    <Analytics />
     <audio src={song} ref={audioRef} loop/>
    <video src={video} autoPlay muted loop id="myVideo" className="myVideo" typeof="video/mp4"/>
    <main 
      style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(rgba(12,3,51,0.3), rgba(12,3,51,0.3)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        textAlign: 'center',
        gap: '1rem'
      }}
    >
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      padding: '1rem', 
    }}>
    {isPlaying ?
    <Pause size={32} onClick={togglePlay} style={{position:'static', top: '1rem', right: '1rem', cursor: 'pointer'}}/> :
    <Play size={32} onClick={togglePlay} style={{position:'static', top: '1rem', right: '1rem', cursor: 'pointer'}}/> 
    }
    </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0px 30px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        }}>
        <WarningOctagon size={32}     style={
          {color: 'red'}
        }/>
        <p
        style={{
          fontWeight: 'bold',
          padding: 0,
          border: 0,
        }}
        > Em desenvolvimento...</p>
        </div>
      <h1>Vitor Saturnino</h1>
      <p>Desenvolvedor fullstack, atuando com React e Node</p>
      <div>
      <LinkedinLogo size={50} style={
        {cursor: 'pointer'}
      } onClick={
        () => window.open('https://www.linkedin.com/in/vitorsat/')
      }/>
      <GithubLogo size={50} 
      style={
        {cursor: 'pointer'}
      }
      onClick={
        () => window.open('https://github.com/vitorsat')
      }/>
      <InstagramLogo size={50} 
      style={
        {cursor: 'pointer',}}
      onClick={
        () => window.open('https://www.instagram.com/_vitormiguell/')
      }/>
      </div>
      <footer>Video by <a href="https://www.youtube.com/@junaidusman4376" target="_blank">@junaidusman4376</a></footer>
      </div>
    </main>
    </>
  )
}

export default App
