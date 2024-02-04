import React, {useEffect, useState} from "react";
import {FaPauseCircle, FaPlayCircle} from "react-icons/fa";

interface MyAudioType {
    loop: boolean;
    play: any;
    pause: any;
}

export default function ButtonMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState<MyAudioType | null>(null);
    const audioElement: any = document.getElementById('myAudio');

    useEffect(() => {
        const newAudio: MyAudioType = new Audio('/assets/music/sound.mp3');
        newAudio.loop = true;
        setAudio(newAudio);
    }, []);

    const music = () => {
        if (audio) {
            if (isPlaying) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio id="myAudio" src="/assets/music/sound.mp3"></audio>
            <button
                type="button" id="tombol-musik"
                className="bg-[#1B1F1E] hover:bg-gray-900 focus:ring-4 focus:ring-gray-700 font-medium rounded-full text-sm px-2 py-2 btn-music"
                onClick={() => music()} data-status={isPlaying ? 'true' : 'false'}>
                {!isPlaying ? (
                    <FaPauseCircle className="spin-icon"/>
                ) : (
                    <FaPlayCircle/>
                )}
            </button>
        </>
    )
}