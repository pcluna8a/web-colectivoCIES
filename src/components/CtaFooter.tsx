import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CtaFooter() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.cta-content', {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <footer ref={containerRef} className="pt-24 bg-cies-pearl flex flex-col items-center border-t border-cies-charcoal/10">

            {/* Massive CTA Card */}
            <div className="cta-content w-full max-w-5xl px-6 mb-24 relative z-10">
                <div className="bg-cies-charcoal rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-cies-mustard mix-blend-overlay opacity-10 group-hover:opacity-20 transition-opacity duration-700" />

                    <h2 className="text-4xl md:text-6xl font-black text-cies-pearl mb-6">
                        Conoce nuestra Oferta Educativa
                    </h2>
                    <p className="text-xl text-cies-pearl/80 mb-10 max-w-2xl mx-auto font-medium">
                        Desarrolla tus habilidades técnicas y tecnológicas en Producción Multimedia y Contenidos Digitales.
                    </p>

                    <a
                        href="https://betowa.sena.edu.co/oferta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-cies-desert hover:bg-cies-desert/90 text-white px-8 py-4 rounded-xl font-bold font-grotesk text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(42,157,143,0.3)]"
                    >
                        SENA SofiaPlus <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Actual Footer Base */}
            <div className="w-full bg-cies-charcoal text-cies-pearl/60 py-12 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    <div className="md:col-span-2 space-y-4">
                        <div className="font-grotesk font-bold text-xl text-white tracking-tight flex items-center gap-2">
                            <div className="w-6 h-6 bg-cies-mustard rounded flex items-center justify-center text-xs text-cies-charcoal">C</div>
                            Colectivo CIES
                        </div>
                        <p className="max-w-xs font-mono text-sm leading-relaxed text-cies-pearl/50">
                            Instrumentando el ecosistema digital del Centro de la Industria, la Empresa y los Servicios — Regional Huila.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs font-mono">Plataforma</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-cies-cyan transition-colors">MediaLab</a></li>
                            <li><a href="#" className="hover:text-cies-cyan transition-colors">Proyectos</a></li>
                            <li><a href="#" className="hover:text-cies-cyan transition-colors">Comunidad</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs font-mono">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-cies-mustard transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-cies-mustard transition-colors">Términos</a></li>
                        </ul>
                    </div>

                </div>

                {/* Server Status & Copyright */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
                    <div className="text-xs font-mono">
                        &copy; {new Date().getFullYear()} SENA Regional Huila. All rights reserved.
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-[#2A9D8F] animate-pulse" />
                        <span className="text-cies-pearl/80">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
