import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Intro Animation
            gsap.from(headlineRef.current?.children || [], {
                y: 60,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5
            });

            // 3D Scroll Reveal for Mockup
            gsap.fromTo(mockupRef.current,
                {
                    rotateX: 15,
                    scale: 0.9,
                    opacity: 0,
                    y: 40
                },
                {
                    rotateX: 0,
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom center',
                        scrub: 1, // Smooth dragging effect
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cies-mustard/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cies-cyan/20 rounded-full blur-[100px] -z-10" />

            {/* Copy */}
            <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
                <h1 ref={headlineRef} className="text-5xl md:text-7xl font-black text-cies-charcoal leading-[1.1] tracking-tighter">
                    <span className="block">Estamos transformando</span>
                    <span className="block text-cies-desert">la innovación y la tecnología,</span>
                    <span className="block text-drama text-4xl md:text-6xl mt-2 text-cies-deepBlue">en narrativas visuales inspiradoras.</span>
                </h1>

                <p className="text-lg md:text-xl text-cies-charcoal/80 max-w-2xl mx-auto font-medium">
                    Únete a la comunidad de creadores del SENA Regional Huila. Diseña, aprende y deja tu huella en el panorama digital a través del contenido multimedia.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button className="btn-primary w-full sm:w-auto">Explorar Proyectos</button>
                    <button className="btn-secondary w-full sm:w-auto">Ver Tutoriales</button>
                </div>
            </div>

            {/* 3D Mockup Container */}
            <div
                ref={mockupRef}
                className="mt-20 w-full max-w-5xl aspect-[16/9] glass-dark p-2 relative overflow-hidden group perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-cies-deepBlue/40 to-cies-cyan/20 pointer-events-none rounded-xl" />

                {/* Fake Browser Header */}
                <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-cies-charcoal/50 rounded-t-xl">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-cies-mustard" />
                    <div className="w-3 h-3 rounded-full bg-cies-desert" />
                    <div className="mx-auto text-xs text-cies-pearl/60 font-mono tracking-widest">dashboard.colectivocies.com</div>
                </div>

                {/* Dashboard Mockup Picture */}
                <div className="w-full h-[calc(100%-2rem)] bg-cies-charcoal relative rounded-b-xl overflow-hidden">
                    {/* Instead of a static image, let's create a brutalist data layout */}
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 p-4">
                        <div className="col-span-3 row-span-6 bg-white/5 rounded-lg border border-white/10 p-4 space-y-4">
                            <div className="h-6 w-24 bg-cies-cyan/20 rounded animate-pulse" />
                            <div className="h-4 w-full bg-white/5 rounded" />
                            <div className="h-4 w-3/4 bg-white/5 rounded" />
                            <div className="h-4 w-5/6 bg-white/5 rounded" />
                        </div>
                        <div className="col-span-9 row-span-2 bg-white/5 rounded-lg border border-white/10 flex items-end p-4">
                            <div className="h-full w-full flex items-end justify-between gap-2">
                                {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                                    <div key={i} className="w-full bg-cies-desert/80 rounded-t-sm transition-all duration-500 hover:bg-cies-mustard" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>
                        <div className="col-span-6 row-span-4 bg-white/5 rounded-lg border border-white/10 p-4">
                            <div className="w-full h-full border border-cies-mustard/30 rounded-full flex items-center justify-center relative">
                                <div className="absolute inset-4 border border-cies-cyan/30 rounded-full" />
                                <span className="text-cies-pearl font-mono text-2xl font-bold">87%</span>
                            </div>
                        </div>
                        <div className="col-span-3 row-span-4 bg-cies-deepBlue/50 rounded-lg border border-cies-cyan/20 p-4 flex flex-col justify-between group-hover:bg-cies-cyan/10 transition-colors">
                            <span className="text-cies-pearl/60 text-sm">System Status</span>
                            <span className="text-cies-mustard font-bold font-grotesk text-3xl">Optimal</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
