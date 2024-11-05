import {ScrollTrigger} from 'gsap/ScrollTrigger';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            ScrollTrigger,
        }
    }
})