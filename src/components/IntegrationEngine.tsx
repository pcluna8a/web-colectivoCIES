import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileVideo, PenTool, Radio, Megaphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NODES = [
    { icon: PenTool, label: 'Diseño', top: '10%', left: '20%' },
    { icon: FileVideo, label: 'Producción', top: '50%', left: '40%' },
    { icon: Radio, label: 'Transmisión', top: '20%', left: '70%' },
    { icon: Megaphone, label: 'Impacto', top: '60%', left: '80%' },
];

export function IntegrationEngine() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pulse animation for nodes
            gsap.to('.engine-node', {
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(110, 198, 216, 0.3)",
                yoyo: true,
                repeat: -1,
                stagger: 0.2,
                duration: 1.5,
                ease: "sine.inOut"
            });

            // SVG path drawing
            const paths = gsap.utils.toArray('.engine-path');
            paths.forEach((path: any) => {
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="nosotros" ref={containerRef} className="py-24 bg-cies-charcoal text-cies-pearl relative overflow-hidden">

            {/* Absolute brutalism grid background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#EDECEC 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <div className="relative z-10">
                    <div className="font-mono text-cies-cyan text-sm font-bold tracking-widest mb-4 uppercase">Ecosistema Colaborativo</div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
                        Nuestra pasión en <span className="text-drama text-cies-mustard">movimiento</span>
                    </h2>
                    <p className="text-lg text-cies-pearl/80 mb-8 max-w-xl leading-relaxed">
                        Como un vehículo que nunca se detiene, unimos a Aprendices e Instructores del MediaLab para generar ideas, producir contenidos y dejar huella dentro del SENA Regional Huila.
                    </p>
                    <ul className="space-y-4 font-mono text-sm text-cies-pearl/70">
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cies-mustard rounded-full" /> Comunidad como pilar técnico.</li>
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cies-desert rounded-full" /> Innovación constante en procesos.</li>
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cies-cyan rounded-full" /> Compromiso con nuestra identidad.</li>
                    </ul>
                </div>

                {/* Visual Engine Map */}
                <div className="relative h-[400px] bg-white/5 border border-white/10 rounded-2xl glass-dark">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                        {/* Connecting lines drawn via GSAP */}
                        <path className="engine-path" d="M 20% 10% L 40% 50% L 70% 20% L 80% 60%" fill="none" stroke="rgba(110, 198, 216, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>

                    {NODES.map((node, i) => (
                        <div
                            key={i}
                            className="engine-node absolute -translate-x-1/2 -translate-y-1/2 bg-cies-deepBlue border border-cies-desert rounded-xl p-4 flex flex-col items-center justify-center gap-2 group"
                            style={{ top: node.top, left: node.left }}
                        >
                            <node.icon className="w-6 h-6 text-cies-mustard transition-transform group-hover:scale-110" />
                            <span className="font-mono text-[10px] font-bold uppercase">{node.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
