import Image from "next/image";
import React from "react";
import {Female, FemaleParent, Male, MaleParent} from "@/config/Profiles";
import GodSays from "./GodSays";
import { WaveSeparatorDown } from "@/utils/Icons";

export default function BrideGoom() {
    return (
        <section className="dark-section" id="mempelai">
            <div className="text-center">
                <h1 className="font-arabic rig py-4 px-2 text-[2rem]">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
                <div className="relative">
                    <div className="absolute top-0 right-[10%]">
                        <svg xmlns={"https://www.w3.org/2000/svg"} fill="#848585"
                             className="opacity-50 animate-love w-10 lg:w-14 h-10 lg:h-14"
                             viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                            />
                        </svg>
                    </div>
                </div>
                <h1 className="font-esthetic py-4 px-2 text-[2rem]">Assalamualaikum Warahmatullahi Wabarakatuh</h1>
                <p className="pb-3 px-3">
                    Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat
                    sekalian untuk menghadiri acara pernikahan kami:
                </p>
                <div className="relative">
                    <div className="absolute top-0 left-[10%]">
                        <svg xmlns={"https://www.w3.org/2000/svg"} fill="#848585"
                             className="opacity-50 animate-love w-10 lg:w-14 h-10 lg:h-14"
                             viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                            />
                        </svg>
                    </div>
                </div>
                <div className="overflow-x-hidden">
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <div className="img-crop border-light shadow my-4 mx-auto">
                            <Image src="/assets/images/cowo3.png" alt="covo" width={100} height={100}/>
                        </div>
                        <div className="font-esthetic text-[3rem]">{Male}</div>
                        <p className="mt-3 mb-0 text-[1.25rem]">Putra</p>
                        <p className="mb-0">{MaleParent}</p>
                    </div>
                    <div className="relative">
                        <div className="absolute top-0 right-[10%]">
                            <svg xmlns={"https://www.w3.org/2000/svg"} fill="#848585"
                                 className="opacity-50 animate-love w-10 lg:w-14 h-10 lg:h-14"
                                 viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                                />
                            </svg>
                        </div>
                    </div>
                    <h1 className="font-esthetic my-4 text-[4rem]">&</h1>
                    <div className="relative">
                        <div className="absolute top-0 left-[10%]">
                            <svg xmlns={"https://www.w3.org/2000/svg"} fill="#848585"
                                 className="opacity-50 animate-love w-10 lg:w-14 h-10 lg:h-14"
                                 viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                                />
                            </svg>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000">
                        <div className="img-crop shadow my-4 mx-auto">
                            <Image src="/assets/images/cewe3.png" alt="cewe" width={100} height={100}/>
                        </div>
                        <h1 className="font-esthetic text-[3rem]">{Female}</h1>
                        <p className="mt-3 mb-0 text-[1.25rem]">Putri</p>
                        <p className="mb-0">{FemaleParent}</p>
                    </div>
                </div>
                <div className="relative">
                    <div
                        className="absolute top-0 right-[10%]">
                        <svg xmlns={"https://www.w3.org/2000/svg"} fill="#848585"
                             className="opacity-50 animate-love w-10 lg:w-14 h-10 lg:h-14" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <WaveSeparatorDown/>
            <GodSays/>
        </section>
    );
}