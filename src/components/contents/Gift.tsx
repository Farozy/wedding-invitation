'use client';
import React, {useState} from 'react';
import Image from "next/image";
import {IoCopyOutline} from "react-icons/io5";
import {FaCheckDouble} from "react-icons/fa";

export default function Gift() {
    const [isCopied1, setIsCopied1] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);

    const copyToClipboard = (buttonNumber: number) => {
        // const nomer = event.currentTarget.getAttribute('data-nomer');
        navigator.clipboard.writeText("1234567890").then();
        const nomer = buttonNumber === 1 ? '123456789' : '987654321';
        navigator.clipboard.writeText(nomer).then();

        if (buttonNumber === 1) {
            setIsCopied1(true);
            setTimeout(() => setIsCopied1(false), 1500);
        } else {
            setIsCopied2(true);
            setTimeout(() => setIsCopied2(false), 1500);
        }

        setTimeout(() => {
            setIsCopied1(false);
        }, 1500);
    };

    return (
        <>
            <div className="container mx-auto" id="gift">
                <div className="py-4">
                    <div className="text-center">
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
                        <h1 className="font-esthetic mt-0 mb-3 text-[3rem]">Love Gift</h1>
                        <p className="mb-1 text[0.9rem]">
                            Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda kasih untuk kami,
                            dapat melalui :
                        </p>
                        <div className="overflow-x-hidden">
                            <div className="flex flex-col lg:flex-row justify-center items-center mx-5 lg:mx-0">
                                <div
                                    className="border border-[#495057] rounded-3xl shadow p-5 m-3 w-full lg:w-[34rem] h-[12rem] lg:h-[15rem]"
                                    data-aos="fade-down" data-aos-duration="1500"
                                >
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/640px-BNI_logo.svg.png"
                                        alt="bni" width={500} height={500}
                                        className="mx-auto h-[3rem] lg:h-[6.3rem] w-[10rem] lg:w-[20rem]"
                                    />
                                    <p className=" mt-3 mb-0 text-[0.9rem]">No. Rekening 123456789</p>
                                    <p className="text-[0.9rem] mb-5">a.n Lorem ipsum dolor</p>
                                    <button
                                        className="text-black bg-white border border-gray-300 pt-1 pb-0.5 px-2 rounded-xl"
                                        onClick={() => copyToClipboard(1)}
                                    >
                                        <span className="flex justify-between">
                                            {isCopied1 ? (
                                                <small className="flex justify-between items-center">
                                                    <FaCheckDouble className="mr-2"/> Tersalin
                                                </small>
                                            ) : (
                                                <small className="flex justify-between items-center">
                                                    <IoCopyOutline className="mr-2"/> Salin No. Rekening
                                                </small>
                                            )}
                                        </span>
                                    </button>
                                </div>
                                <div
                                    className="border border-[#495057] rounded-3xl shadow p-5 m-3 w-full lg:w-[34rem] h-[12rem] lg:h-[15rem]"
                                    data-aos="fade-down" data-aos-duration="1500"
                                >
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/640px-BANK_BRI_logo.svg.png"
                                        width={500} height={500} alt="bri"
                                        className="mx-auto h-[3rem] lg:h-[6.3rem] w-[13rem] lg:w-[23rem]"
                                    />
                                    <p className="mt-3 mb-0 text-[0.9rem]">No. Rekening 987654321</p>
                                    <p className="text-[0.9rem] mb-5">a.n Lorem ipsum dolor</p>
                                    <button
                                        className="text-black bg-white border border-gray-300 pt-1 pb-0.5 px-2 rounded-xl"
                                        onClick={() => copyToClipboard(2)}
                                    >
                                        <span className="flex justify-between">
                                            {isCopied2 ? (
                                                <small className="flex justify-between items-center">
                                                    <FaCheckDouble className="mr-2"/> Tersalin
                                                </small>
                                            ) : (
                                                <small className="flex justify-between items-center">
                                                    <IoCopyOutline className="mr-2"/> Salin No. Rekening
                                                </small>
                                            )}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}