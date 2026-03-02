import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { IntegrationEngine } from './components/IntegrationEngine';
import { CtaFooter } from './components/CtaFooter';

function App() {
    return (
        <main className="min-h-screen relative font-mono text-cies-charcoal max-w-[100vw] overflow-x-hidden selection:bg-cies-mustard selection:text-cies-deepBlue">
            <Navbar />
            <Hero />
            <SocialProof />
            <Features />
            <IntegrationEngine />
            <CtaFooter />
        </main>
    );
}

export default App;
