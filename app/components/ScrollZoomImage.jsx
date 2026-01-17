"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ScrollZoomImage() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const img = ref.current.querySelector(".hero-img");
      if (!img) return;

      gsap.fromTo(
        img,
        { scale: 1 },
        {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref} className="hero-banner" />;
}
