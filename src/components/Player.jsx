import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const{track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong}=useContext(PlayerContext)
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt="song1name" />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>
        </div>

        <div  className='flex flex-col items-center gap-1 m-auto '>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="shuffleicon" />
                <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="previcon" />
                {playStatus 
                ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="pauseicon" />
                :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="playicon" />
                }
               
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="nexticon" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="loopicon" />
            </div>

            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p>3:20</p>
            </div>
        </div>

        <div className='hidden lg:flex items-center gap-2 opacity:75'>
            <img className='w-4' src={assets.plays_icon} alt="playicon" />
            <img className='w-4' src={assets.mic_icon} alt="micicon" />
            <img className='w-4' src={assets.queue_icon} alt="queueicon" />
            <img className='w-4' src={assets.speaker_icon} alt="spekaricon" />
            <img className='w-4' src={assets.volume_icon} alt="volumicon" />
            <div className='w-20 bg-slate-50 h-1 rounded'>

            </div>
            <img className='w-4' src={assets.mini_player_icon} alt="miniplayericon" />
            <img className='w-4' src={assets.zoom_icon} alt="zoomicon" />

        </div>
      
    </div>
  )
}

export default Player
