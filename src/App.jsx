import logo from './logo.svg';
import './App.css';
import Sidebaar from './components/Sidebaar';
import Player from './components/Player';
import Display from './components/Display';
import { useContext } from 'react';
import { PlayerContext } from './context/PlayerContext';


function App() {

  const {audioRef,track}=useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>

       <Sidebaar/>
       <Display/>
     
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
      
    </div>
    );
}

export default App;
