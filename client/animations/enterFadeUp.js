import { TimelineMax, Sine } from 'gsap';

export default function ({ target }) {
  return new TimelineMax()
    .staggerFrom('.link__title', 0.25, { autoAlpha: 0, rotationY: 30, transformOrigin: '50% 50%', ease: Sine.easeInOut }, 0.05);
}
