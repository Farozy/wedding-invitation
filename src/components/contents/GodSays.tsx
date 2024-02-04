import React from 'react';

export default function GodSays() {
    return (
        <section className="w-full lg:w-3/4 mx-auto">
            <div className="container mx-auto">
                <div className="text-center" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="font-esthetic mt-0 mb-3 text-[2rem]">
                        Allah Subhanahu Wa {`Ta'ala`} berfirman
                    </h1>
                    <p className="text-[0.9rem] px-5 sm:px-2 text-justify sm:text-center mb-3 sm:mb-0">
                        Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari
                        jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                        antaramu
                        rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
                        (kebesaran Allah) bagi kaum yang berpikir.
                    </p>
                    <span className="mb-0"><strong>QS. Ar-Rum Ayat 21</strong></span>
                </div>
                <div className="relative">
                    <div
                        className="absolute top-0 left-[10%]">
                        <svg xmlns={"https://www.w3.org/2000/svg"} fill="#848585"
                             className="opacity-50 animate-love w-10 lg:w-14 h-10 lg:h-14" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}