'use client';
import React, {useEffect, useState} from 'react';
// import Link from "next/link";
import {IconCalendar, IconComments, IconGallery, IconHome, IconUsers} from "@/utils/Icons";

export default function Navbar() {
    const [scrollBackground, setScrollBackground] = useState("");
    const [scrollColor, setScrollColor] = useState("");

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrollBackground('shadow-md bg-gray-700');
            setScrollColor("text-white");
        } else {
            setScrollBackground("shadow-none bg-white");
            setScrollColor("text-gray-700");
        }
    };
    const handleScroller = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('a.navbar');

        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            let element: any;
            if(id !== null) {
                element = document.querySelector(`a.navbar[href*=${id}]`);
            }

            if (top >= offset && top < offset + height) {
                navLinks.forEach((links) => {
                    links.classList.remove('active');
                    element?.classList.add('active');
                });
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroller);
    }, []);

    const listNavbar = [
        {
            title: "Hone",
            link: "home",
            icon:  <IconHome/>
        },
        {
            title: "Mempelai",
            link: "mempelai",
            icon:  <IconUsers/>
        },
        {
            title: "Tanggal",
            link: "tanggal",
            icon:  <IconCalendar/>
        },
        {
            title: "Galeri",
            link: "galeri",
            icon:  <IconGallery/>
        },
        {
            title: "Ucapan",
            link: "ucapan",
            icon:  <IconComments/>
        },
    ];

    return (
        <section className={`w-full ${scrollBackground}`}>
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-[#212529] shadow">
                <div id="tabs" className="flex justify-between">
                    {listNavbar.map((item: any, index: number) => (
                        <React.Fragment key={index}>
                            <a
                                href={`#${item.link}`}
                                className={`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 navbar ${scrollColor}`}
                            >
                                {item.icon}
                                <span className="tab tab-home block text-xs">{item.title}</span>
                            </a>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </section>
    );
}