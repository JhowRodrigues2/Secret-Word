import { useState } from 'react'
import './App.css'
import videoBG from './assets/video_bg.mp4'
function App() {

  return (
    <div className="App video-background">
        <video autoPlay muted loop>
            <source src={videoBG} type="video/mp4"/>
            Seu navegador não suporta vídeos em HTML5.
        </video>
        <div className="content">
          
        </div>
    </div>
  )
}

export default App