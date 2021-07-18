import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Works } from './components/Works';
import { Footer } from './components/Footer';
import { Download } from './components/Download';


export const Landing = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true
        });
        
        /*SCROLL HOME*/
        sr.reveal('.home__title',{}); 
        sr.reveal('.button',{delay: 200}); 
        sr.reveal('.home__img',{delay: 400}); 
        sr.reveal('.home__social-icon',{ interval: 200}); 
        
        /*SCROLL ABOUT*/
        sr.reveal('.about__img',{}); 
        sr.reveal('.about__subtitle',{delay: 400}); 
        sr.reveal('.about__text',{delay: 400}); 
        
        /*SCROLL SKILLS*/
        sr.reveal('.skills__subtitle',{}); 
        sr.reveal('.skills__text',{}); 
        sr.reveal('.skills__data',{interval: 200}); 
        sr.reveal('.skills__img',{delay: 600});
        
        /*SCROLL WORK*/
        sr.reveal('.work__rep',{interval: 200});
        sr.reveal('.more',{interval: 200}); 
        
        /*SCROLL CONTACT*/
        sr.reveal('.download__element',{interval: 200}); 
        
      });
    
    return (
        <>
            <Header />
            <main className="l-main">
                <Welcome />
                <About />
                <Skills />
                <Works />
                <Download />
            </main>
            <Footer />
        </>
    )
}
