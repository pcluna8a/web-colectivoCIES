import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PARTNERS = [
    "SENA Regional Huila",
    "MediaLab CIES",
    "Producción Multimedia",
    "Contenidos Digitales",
    "Centro de Formación",
    "Innovación Abierta",
    "Comunidad Académica"
];

export function SocialProof() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Infinite GSAP marquee
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: 'linear',
            });
        }, marqueeRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-12 border-y border-cies-charcoal/10 bg-white/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-6">
                <p className="text-center text-sm font-bold text-cies-charcoal/50 uppercase tracking-widest">
                    Con el respaldo de las mejores áreas de formación
                </p>
            </div>

            <div className="relative flex whitespace-nowrap overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cies-pearl to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cies-pearl to-transparent z-10" />

                <div ref={marqueeRef} className="flex gap-16 items-center w-full min-w-max">
                    {/* Double array to prevent sudden jump during looping */}
                    {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                        <div
                            key={index}
                            className="font-grotesk text-2xl font-bold text-cies-charcoal/20 transition-all duration-300 hover:text-cies-charcoal/80 cursor-default"
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
