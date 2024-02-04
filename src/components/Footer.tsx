import React from 'react';
import {FaHeart} from "react-icons/fa";
import {MdAttachEmail} from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <svg xmlns={"https://www.w3.org/2000/svg"} viewBox="0 0 1440 320">
                <path fill="#111111" fillOpacity="1"
                      d="M0,224L34.3,234.7C68.6,245,137,267,206,266.7C274.3,267,343,245,411,234.7C480,224,549,224,617,213.3C685.7,203,754,181,823,197.3C891.4,213,960,267,1029,266.7C1097.1,267,1166,213,1234,192C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
            </svg>
            <footer>
                <div className="container mx-auto px-5 lg:px-20">
                    <div className="text-center">
                        <p className="pt-2 pb-10 px-2 text-[0.9rem] text-white w-xl"
                           data-aos="fade-up" data-aos-duration="1500"
                        >
                            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak / Ibu / Saudara / i.
                            berkenan hadir untuk memberikan {`do'a`} restunya kami ucapkan terimakasih.
                        </p>

                        <h1 className="font-esthetic text-4xl" data-aos="fade-up" data-aos-duration="2000">
                            Wassalamualaikum Warahmatullahi Wabarakatuh
                        </h1>
                        <h1 className="font-arabic py-4 px-2 text-3xl" data-aos="fade-down" data-aos-duration="2000">
                            اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
                        </h1>
                        <hr className="mt-3 mb-2"/>
                        <div className="flex items-center justify-between">
                            <small className="text-white">
                                    <span className="flex justify-between">
                                        Build with <FaHeart className="mx-1"/> Farozy
                                    </span>
                            </small>
                            <small className="text-white">
                                <span className="flex justify-between">
                                    <MdAttachEmail className="mr-1 mt-0.5"/>
                                    <Link
                                        target="_blank" href="mailto:farozy12@gmail.com?subject=Saran & Kritik"
                                        className="hover:underline hover:text-blue-500"
                                    >
                                        Saran & Kritik
                                    </Link>
                                </span>
                            </small>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}