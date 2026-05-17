import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useStatsCounter() {
  const location = useLocation();

  useEffect(() => {
    const statsSection = document.getElementById("stats");
    if (statsSection && "IntersectionObserver" in window) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || statsSection.classList.contains("counted")) return;

            statsSection.classList.add("counted");
            document.querySelectorAll(".stat-number[data-target]").forEach((counter) => {
              const target = Number(counter.getAttribute("data-target"));
              const showPlus = counter.getAttribute("data-plus") === "true";
              let current = 0;
              const increment = Math.max(target / 50, 1);

              const updateCount = () => {
                current += increment;
                if (current < target) {
                  counter.textContent = `${Math.ceil(current)}${showPlus ? "+" : ""}`;
                  requestAnimationFrame(updateCount);
                } else {
                  counter.textContent = `${target}${showPlus ? "+" : ""}`;
                }
              };

              updateCount();
            });
          });
        },
        { threshold: 0.45 }
      );

      statsObserver.observe(statsSection);

      return () => {
        statsObserver.disconnect();
      };
    }
  }, [location.pathname]);
}
