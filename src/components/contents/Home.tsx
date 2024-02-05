'use client';
import React from 'react';
import Image from "next/image";
import {FaCalendarCheck} from "react-icons/fa";
import Link from "next/link";
import ButtonMusic from "@/components/ButtonMusic";
import {DateWedding, Female, Male, SaveDate} from "@/config/Profiles";
export default function Home() {
    return (
        <section className="container mx-auto pt-5" id="home">
            <div className="text-center pt-4">
                <h1 className="font-esthetic my-4 text-[2.5rem]">Undangan Pernikahan</h1>
                <div className="py-4">
                    <div className="img-crop border-2 border-light shadow mx-auto rounded-full">
                        <Image src="/assets/images/bg2.jpg" alt="bg" width={1000} height={1000} priority className="rounded-full"/>
                    </div>
                </div>
                <h1 className="font-esthetic my-4 text-[3rem]">{`${Male} & ${Female}`}</h1>
                <p className="mb-0 text-[1.5rem]">{DateWedding}</p>
                <Link
                    href={SaveDate}
                    target="_blank"
                    className="inline-flex items-center justify-center border border-white hover:bg-white hover:text-black focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-3 py-1 text-center me-2 my-6 sm:my-3"
                >
                    <FaCalendarCheck className="mr-2"/>
                    <span className="w-full mt-1">Save The Date</span>
                </Link>
                <div className="hidden sm:flex justify-center items-center mt-4 mb-2">
                    <div className="mouse-animation">
                        <div className="scroll-animation"></div>
                    </div>
                </div>
                <p className="m-0 hidden sm:block">Scroll Down</p>
            </div>
            <ButtonMusic />
        </section>
    );
}