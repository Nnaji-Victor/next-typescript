import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const RECIPROCAL_GR = 1 / GOLDEN_RATIO
const DURATION = RECIPROCAL_GR * 1.2

gsap.defaults({
  ease: 'sine.out',
  duration: DURATION
})

export { DURATION, gsap, ScrollSmoother, ScrollTrigger }
