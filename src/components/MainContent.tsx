import React from 'react';
import Home from "@/components/contents/Home";
import Navbar from "@/components/Navbar";
import {WaveSeparatorDown, WaveSeparatorTop} from "@/utils/Icons";
import BrideGoom from "@/components/contents/BrideGoom";
// import GodSays from "@/components/contents/GodSays";
import EventDate from "@/components/contents/EventDate";
import Gallery from "@/components/contents/Gallery";
// import Gift from "@/components/contents/Gift";
import Comment from "@/components/contents/Comment";

export default function MainContent() {
    return (
        <main className="text-white" data-bs-spy="scroll" data-bs-target="#navbar-menus"
              data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex={0}>
            <Home/>
            <WaveSeparatorTop/>
            <BrideGoom/>
            <WaveSeparatorTop/>
            <EventDate/>
            <Gallery/>
            <WaveSeparatorDown/>
            {/*<Gift/>*/}
            <Comment />
            <Navbar/>
        </main>
    );
}