import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    const selector = ".fade-up, .fade-in, .fade-left, .fade-right";
    const animatedElements = document.querySelectorAll(selector);

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

      const observeAnimatedElement = (element: Element) => {
        if (!element.classList.contains("in-view")) {
          observer.observe(element);
        }
      };

      animatedElements.forEach((element) => observeAnimatedElement(element));

      // Observe future nodes so async-rendered cards do not stay hidden at opacity: 0.
      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof Element)) {
              return;
            }

            if (node.matches(selector)) {
              observeAnimatedElement(node);
            }

            node.querySelectorAll(selector).forEach((child) => observeAnimatedElement(child));
          });
        });
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => {
        animatedElements.forEach((element) => observer.unobserve(element));
        mutationObserver.disconnect();
        observer.disconnect();
      };
    } else {
      animatedElements.forEach((element) => element.classList.add("in-view"));
    }
  }, [location.pathname]);
}
