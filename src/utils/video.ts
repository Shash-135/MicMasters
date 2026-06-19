export const normalizeVideoUrl = (rawUrl: string): string => {
  const trimmed = rawUrl.trim();
  if (!trimmed) return '';

  // Ensure URL has a scheme
  const withScheme = /^(https?:)?\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const url = new URL(withScheme);
    return url.toString();
  } catch {
    return withScheme;
  }
};

export const isYouTubeUrl = (rawUrl: string): boolean => {
  try {
    const url = new URL(normalizeVideoUrl(rawUrl));
    return url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be');
  } catch {
    return false;
  }
};

export const getYouTubeVideoId = (rawUrl: string): string | null => {
  try {
    const url = new URL(normalizeVideoUrl(rawUrl));

    if (url.hostname.includes('youtu.be')) {
      const pathId = url.pathname.split('/').filter(Boolean)[0];
      return pathId || null;
    }

    const embedMatch = url.pathname.match(/\/embed\/([^/?]+)/i);
    if (embedMatch?.[1]) {
      return embedMatch[1];
    }

    const shortsMatch = url.pathname.match(/\/shorts\/([^/?]+)/i);
    if (shortsMatch?.[1]) {
      return shortsMatch[1];
    }

    return url.searchParams.get('v');
  } catch {
    return null;
  }
};

export const getYouTubeWatchUrl = (rawUrl: string): string | null => {
  const videoId = getYouTubeVideoId(rawUrl);
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : null;
};

export const getYouTubeThumbnailUrl = (rawUrl: string): string | null => {
  const videoId = getYouTubeVideoId(rawUrl);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
};
