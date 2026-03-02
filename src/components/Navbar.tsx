import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Elegant fade down entry for the navbar
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 mx-auto max-w-7xl mt-4"
        >
            <div className="glass-card flex items-center justify-between px-6 py-3">
                {/* Brand Area */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-10 h-10 bg-cies-mustard rounded-lg flex items-center justify-center font-grotesk font-black text-cies-deepBlue transition-transform duration-300 group-hover:scale-110">
                        C
                    </div>
                    <span className="font-grotesk font-bold text-lg tracking-tight">Colectivo CIES</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Nosotros', 'Innovación', 'Píldoras'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-medium text-cies-charcoal/80 hover:text-cies-deepBlue transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-cies-desert after:transition-all hover:after:w-full"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium hover:text-cies-desert transition-colors">
                        Log in
                    </button>
                    <a
                        href="https://betowa.sena.edu.co/oferta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-5 py-2"
                    >
                        Oferta SENA
                    </a>
                </div>
            </div>
        </nav>
    );
}
