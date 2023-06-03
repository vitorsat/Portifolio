import { GithubLogo, InstagramLogo, LinkedinLogo, WarningOctagon } from "phosphor-react"
import './App.css'

function App() {
  return (
    <main 
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        gap: '1rem'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
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
      <h1>Oi, me chamo Vitor Saturnino</h1>
      <p>Sou um desenvolvedor fullstack, atuando com React e Node</p>
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
      </div>
    </main>
  )
}

export default App
