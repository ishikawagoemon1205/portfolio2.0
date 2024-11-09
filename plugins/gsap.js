// plugins/gsap.js
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(gsap);
  nuxtApp.provide('gsap', gsap);
  nuxtApp.provide('ScrollTrigger', ScrollTrigger);
});