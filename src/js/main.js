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



gsap.utils.toArray(".animate-left .item-img").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            toggleActions: "play none none none",
            start: "top center"
        },
        x: '-100vw',
        opacity: 0,
        duration: 1.2
    })
});

gsap.utils.toArray(".animate-top .item-img").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            toggleActions: "play none none none",
            start: "top center"
        },
        y: '-100%',
        opacity: 0,
        duration: 1
    })
});


gsap.utils.toArray(".animate-bottom .item-img").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            toggleActions: "play none none none",
            start: "top center"
        },
        y: '100%',
        opacity: 0,
        duration: 1
    })
});

gsap.utils.toArray(".animate-right .item-img").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            toggleActions: "play none none none",
            start: "top center"
        },
        x: '100vw',
        opacity: 0,
        duration: 1.2
    })
});

gsap.utils.toArray(".item-info").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            toggleActions: "play none none none",
            start: "top center"
        },
        y: '100%',
        opacity: 0,
        duration: 1.3,
    })
});


gsap.from(".about-text", {
    scrollTrigger: {
        trigger: ".about-text",
        toggleActions: "play none none none",
        start: "top center"
    },
    x: '-100vw',
    opacity: 0,
    duration: 1.2
})

gsap.from(".about-img", {
    scrollTrigger: {
        trigger: ".about-img",
        toggleActions: "play none none none",
        start: "top center"
    },
    x: '100vw',
    opacity: 0,
    duration: 1.2
})

gsap.from(".form-control", {
    scrollTrigger: {
        trigger: ".form-control",
        toggleActions: "play none none none",
        start: "top center"
    },
    y: '-100%',
    opacity: 0,
    duration: 1.2
});

gsap.from(".submit", {
    scrollTrigger: {
        trigger: ".submit",
        toggleActions: "play none none none",
        start: "top center"
    },
    x: '100%',
    opacity: 0,
    duration: 1.3
});

gsap.from(".showcase-nav li", {
    scrollTrigger: {
        trigger: ".showcase-nav",
        toggleActions: "play none none none",
        start: "top center"
    },
    y: '100%',
    opacity: 0,
    duration: 1.3,
    stagger: .3
});

gsap.from(".navbar-list li", {
    scrollTrigger: {
        trigger: ".navbar-list li",
        toggleActions: "play none none none",
        start: "top bottom"
    },
    x: '100%',
    opacity: 0,
    duration: 1.3,
    stagger: .3
});

gsap.from(".social-nav li", {
    scrollTrigger: {
        trigger: ".social-nav li",
        toggleActions: "play none none none",
    },
    y: "100vh",
    opacity: 0,
    duration: 1.3,
    stagger: .3
});



const selector = (s) => document.querySelector(s);

selector('.dropdown-toggle').addEventListener('click', () => {
    selector('.dropdown-menu').classList.toggle('active');
})