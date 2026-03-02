import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HelpCircle, Users, MapPin, Calendar, Lightbulb, Workflow } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
    {
        pillar: 'What?',
        title: 'El Suceso',
        description: 'Relatamos el hecho, evento o propuesta principal de forma directa y cautivadora.',
        icon: HelpCircle,
        color: 'text-cies-mustard',
        bg: 'bg-cies-mustard/10',
        glow: 'hover:shadow-[0_0_40px_rgba(233,196,106,0.3)]',
        colSpan: 'md:col-span-2'
    },
    {
        pillar: 'Who?',
        title: 'Los Protagonistas',
        description: 'Aprendices, instructores, o administrativos. Damos rostro a la innovación.',
        icon: Users,
        color: 'text-cies-cyan',
        bg: 'bg-cies-cyan/10',
        glow: 'hover:shadow-[0_0_40px_rgba(110,198,216,0.3)]',
        colSpan: 'md:col-span-1'
    },
    {
        pillar: 'Where?',
        title: 'El Escenario',
        description: 'Ubicamos geográficamente dónde suceden los eventos que transforman el ecosistema.',
        icon: MapPin,
        color: 'text-cies-desert',
        bg: 'bg-cies-desert/10',
        glow: 'hover:shadow-[0_0_40px_rgba(42,157,143,0.3)]',
        colSpan: 'md:col-span-1'
    },
    {
        pillar: 'When?',
        title: 'El Momento',
        description: 'Marcamos en el tiempo cada hito, fecha y suceso importante para el centro.',
        icon: Calendar,
        color: 'text-[white]', // Will override below safely via tailwind context
        customColor: '#E9C46A',
        bg: 'bg-white/5',
        glow: 'hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]',
        colSpan: 'md:col-span-2'
    },
    {
        pillar: 'Why?',
        title: 'El Propósito',
        description: 'Profundizamos en los motivos y razones detrás de cada avance.',
        icon: Lightbulb,
        color: 'text-cies-mustard',
        bg: 'bg-cies-mustard/10',
        glow: 'hover:shadow-[0_0_40px_rgba(233,196,106,0.3)]',
        colSpan: 'md:col-span-2'
    },
    {
        pillar: 'How?',
        title: 'El Desarrollo',
        description: 'Mostramos la metodología y la manera en la que los hitos cobran vida.',
        icon: Workflow,
        color: 'text-cies-cyan',
        bg: 'bg-cies-cyan/10',
        glow: 'hover:shadow-[0_0_40px_rgba(110,198,216,0.3)]',
        colSpan: 'md:col-span-1'
    }
];

export function Features() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.feature-card');

            gsap.from(cards, {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 80%',
                }
            });
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="innovacion" className="py-32 px-6 relative bg-white">
            <div className="absolute inset-0 bg-noise pointer-events-none z-0" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 md:w-2/3">
                    <h2 className="text-5xl md:text-[4rem] font-black mb-6 leading-none tracking-tight">
                        ¿Cómo narramos <span className="text-drama text-6xl md:text-[5rem] text-cies-desert ml-2 tracking-normal">nuestra historia?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-cies-charcoal/80 font-medium max-w-2xl">
                        A través de 6 pilares comunicativos construimos el pulso audiovisual del Centro de la Industria, la Empresa y los Servicios.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {FEATURES.map((feature, i) => (
                        <div
                            key={i}
                            className={cn(
                                "feature-card group relative p-8 rounded-none border border-cies-charcoal flex flex-col justify-between overflow-hidden",
                                "transition-all duration-500 hover:-translate-y-2 bg-white",
                                feature.colSpan,
                                feature.glow
                            )}
                            style={feature.title === 'El Momento' ? { backgroundColor: '#1A1A1A', color: '#EDECEC', borderColor: '#1A1A1A' } : {}}
                        >

                            <div className="flex justify-between items-start z-10 relative">
                                <div className={cn("p-3 rounded-xl", feature.bg, feature.title === 'El Momento' ? 'bg-white/10' : '')}>
                                    <feature.icon className={cn("w-6 h-6", feature.title === 'El Momento' ? 'text-cies-mustard' : feature.color)} />
                                </div>
                                <div className="font-mono text-xs font-bold uppercase tracking-widest opacity-50">
                                    {feature.pillar}
                                </div>
                            </div>

                            <div className="z-10 relative mt-16">
                                <h3 className={cn("text-3xl font-black mb-3 tracking-tight", feature.title === 'El Momento' ? 'text-white' : 'text-cies-deepBlue')}>
                                    {feature.title}
                                </h3>
                                <p className={cn("font-medium", feature.title === 'El Momento' ? 'text-white/70' : 'text-cies-charcoal/70')}>
                                    {feature.description}
                                </p>
                            </div>

                            {/* Interaction Decorator */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={feature.title === 'El Momento' ? { backgroundImage: 'linear-gradient(to top right, transparent, rgba(233, 196, 106, 0.1))' } : { backgroundImage: 'linear-gradient(to top right, transparent, rgba(42, 157, 143, 0.05))' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
