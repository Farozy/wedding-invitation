import React from 'react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from 'swiper/modules';

export default function Gallery() {
    const listImageOne = [
        {
            "src": "/slides/satu.jpg",
            "alt": "Gambar 1"
        },
        {
            "src": "/slides/dua.jpg",
            "alt": "Gambar 2"
        },
        {
            "src": "/slides/tiga.jpg",
            "alt": "Gambar 3"
        }
    ];

    const listImageTwo = [
        {
            "src": "/slides/empat.jpg",
            "alt": "Gambar 4"
        },
        {
            "src": "/slides/lima.jpg",
            "alt": "Gambar 5"
        },
        {
            "src": "/slides/enam.jpg",
            "alt": "Gambar 6"
        }
    ];

    return (
        <section className="dark-section" id="galeri">
            <div className="container pb-2 pt-4 mx-auto px-5 lg:px-20">
                <div className="card-body border border-[#495057] rounded-3xl p-3">
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
                    <h1
                        className="font-esthetic text-center py-3 text-[2rem]"
                        data-aos="fade-down" data-aos-duration="1500">
                        Galeri
                    </h1>
                    <div data-aos="fade-up" data-aos-duration="1500" data-bs-ride="carousel">
                        <div className="mb-5">
                            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                {listImageOne.map((item: any, index: any) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={item.src} alt={item.alt} width={500} height={500}
                                            className="rounded-2xl w-full lg:h-[44rem] h-[15rem]"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="mt-5">
                            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                {listImageTwo.map((item: any, index: any) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={item.src} alt={item.alt} width={500} height={500}
                                            className="rounded-2xl w-full lg:h-[44rem] h-[15rem]"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}