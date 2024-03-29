'use client';
import Welcome from "@/components/Welcome";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import AOS from "aos";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            AOS.init();
            setLoading(false);
        }, 3000);
    }, [])

    return (
        <main>
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <Welcome/>
                    <MainContent/>
                    <Footer/>
                </>
            )}
        </main>
    )
}
