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
        <section ref={containerRef} className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cies-pearl">
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-noise pointer-events-none z-0" />

            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cies-mustard/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cies-cyan/20 rounded-full blur-[100px] -z-10" />

            {/* Copy */}
            <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
                <h1 ref={headlineRef} className="text-5xl md:text-[5.5rem] font-black text-black leading-[0.95] tracking-[-0.03em]">
                    <span className="block">Estamos transformando</span>
                    <span className="block text-cies-desert">la innovación y la tecnología,</span>
                    <span className="block text-drama text-4xl md:text-[4.5rem] mt-4 text-cies-deepBlue tracking-normal">en narrativas visuales inspiradoras.</span>
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
                className="mt-24 w-full max-w-5xl aspect-[16/9] glass-dark p-2 relative overflow-hidden group perspective-1000 z-10"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-cies-deepBlue/10 to-transparent pointer-events-none rounded-xl" />

                {/* Fake Browser Header */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-black rounded-t-xl">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-cies-mustard/80" />
                    <div className="w-3 h-3 rounded-full bg-cies-desert/80" />
                    <div className="mx-auto text-xs text-cies-pearl/40 font-mono tracking-[0.2em] font-bold">DASHBOARD.COLECTIVOCIES.COM</div>
                </div>

                {/* Dashboard Mockup Picture */}
                <div className="w-full h-[calc(100%-2.5rem)] bg-black relative rounded-b-xl overflow-hidden border-t border-white/5">
                    {/* Brutalist Data Layout */}
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-3 p-4">

                        {/* Sidebar */}
                        <div className="col-span-3 row-span-6 bg-[#0a0a0a] rounded-lg border border-white/10 p-5 space-y-6 flex flex-col">
                            <div className="h-6 w-24 bg-cies-cyan/90 rounded-sm animate-pulse" />
                            <div className="space-y-3 flex-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="flex items-center gap-3 group/item">
                                        <div className="w-2 h-2 rounded-full bg-white/20 group-hover/item:bg-cies-mustard transition-colors" />
                                        <div className="h-3 w-full bg-white/10 rounded-sm group-hover/item:bg-white/30 transition-colors" />
                                    </div>
                                ))}
                            </div>
                            <div className="h-12 w-full border border-cies-mustard/20 bg-cies-mustard/5 rounded-md flex items-center justify-center text-cies-mustard text-xs font-mono font-bold tracking-widest mt-auto">
                                ALL SYSTEMS GO
                            </div>
                        </div>

                        {/* Main Chart */}
                        <div className="col-span-9 row-span-4 bg-[#0a0a0a] rounded-lg border border-white/10 flex flex-col p-5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <div className="text-right">
                                    <div className="text-cies-pearl/50 font-mono text-xs uppercase tracking-wider mb-1">Impacto Multimedia</div>
                                    <div className="text-4xl font-black text-white font-grotesk">1,204.89</div>
                                </div>
                            </div>
                            <div className="h-full w-full flex items-end justify-between gap-3 pt-12">
                                {[40, 70, 45, 90, 65, 80, 55, 100, 30, 85, 60, 95].map((h, i) => (
                                    <div key={i} className="w-full relative group/bar h-full flex items-end">
                                        <div
                                            className="w-full bg-cies-desert transition-all duration-700 hover:bg-cies-mustard relative"
                                            style={{ height: `${h}%` }}
                                        >
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono opacity-0 group-hover/bar:opacity-100 text-cies-mustard transition-opacity whitespace-nowrap">
                                                +{h}%
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Stats */}
                        <div className="col-span-5 row-span-2 bg-cies-cyan/10 rounded-lg border border-cies-cyan/20 p-5 flex items-center justify-between group-hover:bg-cies-cyan/20 transition-colors">
                            <div className="space-y-1">
                                <span className="text-cies-pearl/60 text-xs font-mono uppercase tracking-wider">Carga Servidor</span>
                                <div className="text-white font-bold font-grotesk text-3xl">Pizarra #2A2A</div>
                            </div>
                            <div className="w-16 h-16 border-4 border-cies-cyan/30 rounded-full border-t-cies-cyan animate-spin" />
                        </div>

                        <div className="col-span-4 row-span-2 bg-[#0a0a0a] rounded-lg border border-white/10 p-5">
                            <div className="w-full h-full border border-cies-mustard/20 rounded-lg flex flex-col items-center justify-center relative bg-cies-mustard/5">
                                <span className="text-cies-mustard/60 text-xs font-mono uppercase tracking-widest mb-1">Precisión Cruda</span>
                                <span className="text-cies-mustard font-mono text-3xl font-bold">100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
