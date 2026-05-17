import { useEffect } from "react";

const BASE_TITLE = "Mic Masters Academy";

export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | ${BASE_TITLE}` : `${BASE_TITLE} | Communications and Soft Skills Training`;
  }, [page]);
}
