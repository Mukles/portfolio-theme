import { useEffect, useRef } from "react";

const CursorAnimation = (): JSX.Element => {
  const cursor = useRef<HTMLSpanElement>(null);
  const cursorInner = useRef<HTMLSpanElement>(null);
  const cursorOuter = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.screen.width > 767) {
      const buttons = document.querySelectorAll<
        HTMLButtonElement | HTMLAnchorElement
      >("button, a");

      let mouseX = 0;
      let mouseY = 0;

      let innerX = 0;
      let innerY = 0;

      let outerX = 0;
      let outerY = 0;

      let loop: number | null = null;

      const render = () => {
        loop = null;

        innerX = lerp(innerX, mouseX, 0.15);
        innerY = lerp(innerY, mouseY, 0.15);

        outerX = lerp(outerX, mouseX, 0.13);
        outerY = lerp(outerY, mouseY, 0.13);

        const angle =
          (Math.atan2(mouseY - outerY, mouseX - outerX) * 180) / Math.PI;

        const normalX = Math.min(
          Math.floor((Math.abs(mouseX - outerX) / outerX) * 1000) / 1000,
          1
        );
        const normalY = Math.min(
          Math.floor((Math.abs(mouseY - outerY) / outerY) * 1000) / 1000,
          1
        );
        const normal = normalX + normalY * 0.5;
        const skwish = normal * 0.7;

        if (cursorInner.current) {
          cursorInner.current.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
        }

        if (cursorOuter.current) {
          cursorOuter.current.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) rotate(${angle}deg) scale(${
            1 + skwish
          }, ${1 - skwish})`;
        }

        // Stop loop if interpolation is done.
        if (normal !== 0) {
          loop = window.requestAnimationFrame(render);
        }
      };

      const lerp = (s: number, e: number, t: number): number => {
        return (1 - t) * s + t * e;
      };

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!loop) {
          loop = window.requestAnimationFrame(render);
        }
      };

      document.addEventListener("mousemove", handleMouseMove);

      const handleButtonMouseEnter = () => {
        if (cursor.current) {
          cursor.current.classList.add("cursor-hover");
        }
      };

      const handleButtonMouseLeave = () => {
        if (cursor.current) {
          cursor.current.classList.remove("cursor-hover");
        }
      };

      buttons.forEach((button) => {
        button.addEventListener("mouseenter", handleButtonMouseEnter);
        button.addEventListener("mouseleave", handleButtonMouseLeave);
      });

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);

        buttons.forEach((button) => {
          button.removeEventListener("mouseenter", handleButtonMouseEnter);
          button.removeEventListener("mouseleave", handleButtonMouseLeave);
        });
      };
    }
  }, []);

  return (
    <span ref={cursor} className="cursor">
      <span ref={cursorInner} className="cursor-move-inner">
        <span className="cursor-inner"></span>
      </span>
      <span ref={cursorOuter} className="cursor-move-outer">
        <span className="cursor-outer"></span>
      </span>
    </span>
  );
};

export default CursorAnimation;
