'use client';
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {FaMapLocationDot} from "react-icons/fa6";
import {Location} from '@/config/Maps';
import {Akad, DateTime, Resepsi} from "@/config/Profiles";

export default function EventDate() {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const now: Date = new Date();
    const targetDate: Date = new Date(DateTime);

    useEffect(() => {
        const tampilanWaktu = document.getElementById('tampilan-waktu');

        if (tampilanWaktu) {
            const dataWaktu = tampilanWaktu.getAttribute('data-waktu');

            if (dataWaktu !== null && dataWaktu !== undefined) {
                const formattedDataWaktu = dataWaktu.replace(' ', 'T');
                const countDownDate = new Date(formattedDataWaktu).getTime();

                setInterval(() => {
                    const distance = Math.abs(countDownDate - new Date().getTime());

                    setTime({
                        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds: Math.floor((distance % (1000 * 60)) / 1000),
                    });
                }, 1000);
            }
        }
    }, []);

    return (
        <>
            <section className="dark-section" id="tanggal">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h1 className="font-esthetic py-3 text-[2rem]">Waktu Menuju Acara</h1>
                        <div className="border border-[#495057] rounded-full py-2 px-4 shadow mx-6 lg:mx-16 mb-4">
                            {now < targetDate ? (
                                <div className="flex flex-wrap justify-center" data-waktu={DateTime}
                                     id="tampilan-waktu">
                                    <div className="w-1/4 p-1">
                                        <div className="inline m-0 p-0 text-2xl md:text-3xl lg:text-4xl"
                                             id="hari">{time.days}</div>
                                        <small className="ms-1 me-0 my-0 p-0 inline">Hari</small>
                                    </div>
                                    <div className="w-1/4 p-1">
                                        <h2 className="inline m-0 p-0 text-2xl md:text-3xl lg:text-4xl"
                                            id="jam">{time?.hours}</h2>
                                        <small className="ms-1 me-0 my-0 p-0 inline">Jam</small>
                                    </div>
                                    <div className="w-1/4 p-1">
                                        <h2 className="inline m-0 p-0 text-2xl md:text-3xl lg:text-4xl"
                                            id="menit">{time?.minutes}</h2>
                                        <small className="ms-1 me-0 my-0 p-0 inline">Menit</small>
                                    </div>
                                    <div className="w-1/4 p-1">
                                        <h2 className="inline m-0 p-0 text-2xl md:text-3xl lg:text-4xl"
                                            id="detik">{time?.seconds}</h2>
                                        <small className="ms-1 me-0 my-0 p-0 inline">Detik</small>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-lg">
                                    Acara pernikahan telah dimulai
                                </div>
                            )}
                        </div>
                        <p className="mt-4 py-2 text-[0.9rem]">
                            Dengan memohon rahmat dan ridho Allah Subhanahu Wa {`Ta'ala`}, insyaAllah kami akan
                            menyelenggarakan
                            acara :
                        </p>
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
                        <div className="overflow-x-hidden mb-4">
                            <div className="py-2 mb-4" data-aos="fade-left" data-aos-duration="1500">
                                <h1 className="font-esthetic text-[2rem]">Akad</h1>
                                <p>Pukul {Akad} WIB - Selesai</p>
                            </div>
                            <div className="py-2" data-aos="fade-right" data-aos-duration="1500">
                                <h1 className="font-esthetic text-[2rem]">Resepsi</h1>
                                <p>Pukul {Resepsi} WIB - Selesai</p>
                            </div>
                        </div>
                        <div className="py-2" data-aos="fade-up" data-aos-duration="1500">
                            <Link
                                href={Location} target="_blank"
                                className="text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-full text-sm px-3 pt-3.5 pb-1 text-center me-2 mb-2"
                            >
                                <div className="inline-flex">
                                    <FaMapLocationDot className="mr-2" size={20}/> <span className="pt-1 font-semibold">Lihat Google Maps</span>
                                </div>
                            </Link>
                            <p className="mb-0 mt-4 mx-1 pb-4 text-[0.9rem]">
                                RT 10 RW 02, Desa Kedawang, Kec. Nguling, Kab. Pasuruan, Jawa Timur
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}