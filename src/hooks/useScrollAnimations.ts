import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    const animatedElements = document.querySelectorAll(".fade-up, .fade-in, .fade-left, .fade-right");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      animatedElements.forEach((element) => observer.observe(element));

      return () => {
        animatedElements.forEach((element) => observer.unobserve(element));
        observer.disconnect();
      };
    } else {
      animatedElements.forEach((element) => element.classList.add("in-view"));
    }
  }, [location.pathname]);
}
