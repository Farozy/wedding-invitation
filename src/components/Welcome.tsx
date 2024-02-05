"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { FaEnvelopeOpen } from "react-icons/fa6";
import { confetti } from 'tsparticles-confetti';
import { Opacity, animate } from "@/utils/Animation";
import 'aos/dist/aos.css';
import { HiPaperAirplane } from "react-icons/hi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API_CONTACT } from "@/config/API";
import { AxiosGet } from "@/config/Axios";
import { Toaster } from 'react-hot-toast';
import { IconWa } from "@/utils/Icons";
import { Toast } from "@/config/Toast";
import { useGlobalContext } from "@/app/context/store";

interface inputProps {
    tamu: string | number;
}
export default function Welcome() {
    const [isTamu, setIsTamu] = useState();
    const [isContact, setIsContact] = useState();
    const audioElement: any = document.getElementById('myAudio');
    const { setId, setPhone, setName } = useGlobalContext();
    const [isLoading, setIsloading] = useState(false);

    const open = async () => {
        const body = document.querySelector('body');
        body!.style.overflowY = 'scroll';

        Opacity("welcome");

        await confetti({
            origin: { y: 0.8 },
            zIndex: 1057
        });

        await animate();

        await audioElement.play();
    }

    const doFormSubmit = async (values: any) => {
        setIsloading(true);
        const response = await AxiosGet("get", API_CONTACT, values.tamu);

        if (response.code === undefined) {
            setIsTamu(response.name);
            setIsContact(response);
            formik.resetForm();

            setId(response.id)
            setPhone(response.phone);
            setName(response.name);
        } else {
            setTimeout(async () => {
                setIsloading(false);
                await Toast('error', "Nomer WA tidak dikenali", 'top-center', '❌');
            }, 2000)
        }

        setTimeout(() => {
            formik.setSubmitting(false);
        }, 2000);
    }

    const formik = useFormik<inputProps>({
        initialValues: {
            tamu: ''
        },
        validationSchema: Yup.object().shape({
            tamu: Yup
                .number()
                .typeError('Inputan harus berupa angka / nomer')
                .required("No telepon / wa belum diisi"),
        }),
        onSubmit: doFormSubmit
    });

    useEffect(() => {
    }, [isContact]);

    return (
        <div className="loading-page opacity-100" id="welcome" style={ { opacity: '1' } }>
            <div className="flex justify-center items-center min-h-screen" data-aos="zoom-in">
                <div className="text-center">
                    <h1 className="font-esthetic mb-4 text-[2.5rem]">
                        The Wedding Of
                    </h1>
                    <div className="img-crop shadow mb-4 mx-auto rounded-full">
                        <Image
                            src="/assets/images/bg1.jpg" alt="bg" width={ 1000 } height={ 1000 }
                            priority className="rounded-full"
                        />
                    </div>
                    <h1 className="font-esthetic my-4 text-[2.5rem]">Farozy & Ukhty</h1>
                    { isTamu ? (
                        <>
                            <p className="mb-1 mx-0 p-0 text-white">Kepada Yth Bapak/Ibu/Saudara/i</p>
                            <p className="mb-5 text-white text-2xl md:text-3xl lg:text-3xl">
                                { isTamu }
                            </p>
                        </>
                    ) : "" }
                    { isTamu ? (
                        <>
                            <button
                                type="button" onClick={ () => open() }
                                className="bg-white hover:bg-gray-300 border border-gray-300 focus:outline-none hover focus:ring-4 focus:ring-gray-200 font-medium rounded-3xl text-sm px-3 py-1.5 me-2 mb-2">
                                <span className="flex items-center">
                                    <FaEnvelopeOpen className="mr-2" /> <span className="mt-1">Buka Undangan</span>
                                </span>
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="flex mx-auto w-full">
                                <span
                                    className="inline-flex items-center px-1.5 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-xl dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <IconWa />
                                </span>
                                <form onSubmit={ formik.handleSubmit }>
                                    <div className="relative w-full">
                                        <input
                                            type="text" placeholder="Masukkan no whatsapp" name="tamu"
                                            autoComplete="off"
                                            onChange={ formik.handleChange }
                                            onBlur={ formik.handleBlur }
                                            value={ formik.values.tamu }
                                            className="block py-2.5 pr-7 pl-2 z-20 text-sm rounded-e-lg rounded-s-gray-100 rounded-s-2 border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
                                        />
                                        { !isLoading ?
                                            <button
                                                type="submit"
                                                className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white rounded-e-lg border border-green-600 focus:ring-1 focus:outline-none bg-[#4DC247] hover:bg-green-500 focus:ring-green-500"
                                            >
                                                <HiPaperAirplane className="rotate-90" />
                                            </button>
                                            :
                                            <button
                                                type="submit"
                                                className="absolute top-0 end-0 h-full text-sm font-medium text-white rounded-e-xl"
                                            >
                                                <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                    </path>
                                                </svg>
                                            </button>
                                        }
                                    </div>
                                </form>
                            </div>
                            { formik.touched.tamu && formik.errors.tamu ? (
                                <div
                                    className="text-red-500 ml-1 mt-1 text-xs md:text-sm lg:text-sm">{ formik.errors.tamu }</div>
                            ) : null }
                        </>
                    ) }
                </div>
            </div>
            <Toaster />
        </div>
    );
}