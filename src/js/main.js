import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../scss/main.scss';

gsap.registerPlugin(ScrollTrigger);


gsap.fromTo('.home-text h1',
    {x:'-100%', opacity: 0},
    {x:0, opacity: 1, ease: 'back.out(1)',duration: 1, delay: 1}
);

gsap.fromTo('.home-text p',
    {x:'-100%', opacity: 0},
    {x:0, opacity: 1, ease: 'back.out(1)',duration: 1, delay: 1.2}
);

gsap.from('.home-text .btn',
{y: '100vh', opacity: 0, ease: 'back.out(1)',duration: 1, delay: 1.4}
  
);