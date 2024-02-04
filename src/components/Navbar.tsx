import React from 'react';
import Link from "next/link";
import {IconCalendar, IconComments, IconGallery, IconHome, IconUsers} from "@/utils/Icons";

export default function Navbar() {
    return (
        <>
            <div className="w-full">
                <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-[#212529] shadow">
                    <div id="tabs" className="flex justify-between">
                        <Link
                            href="#home"
                            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                        >
                            <IconHome/>
                            <span className="tab tab-home block text-xs">Home</span>
                        </Link>
                        <Link
                            href="#mempelai"
                            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                        >
                            <IconUsers/>
                            <span className="tab tab-kategori block text-xs">Mempelai</span>
                        </Link>
                        <Link
                            href="#tanggal"
                            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                        >
                            <IconCalendar/>
                            <span className="tab tab-explore block text-xs">Tanggal</span>
                        </Link>
                        <Link
                            href="#galeri"
                            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                        >
                            <IconGallery/>
                            <span className="tab tab-whishlist block text-xs">Galeri</span>
                        </Link>
                        <Link
                            href="#ucapan"
                            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <IconComments/>
                            <span className="tab tab-account block text-xs">Ucapan</span>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}