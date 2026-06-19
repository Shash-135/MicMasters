import ReactPlayer from 'react-player';
import { getYouTubeVideoId, isYouTubeUrl, normalizeVideoUrl } from '../utils/video';

type VideoEmbedProps = {
  url: string;
  playing?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
};

const Player = ReactPlayer as any;

export default function VideoEmbed({
  url,
  playing = false,
  muted = false,
  loop = false,
  controls = false,
  width = '100%',
  height = '100%',
  style,
}: VideoEmbedProps) {
  const normalizedUrl = normalizeVideoUrl(url);

  if (isYouTubeUrl(normalizedUrl)) {
    const videoId = getYouTubeVideoId(normalizedUrl);

    if (!videoId) {
      return null;
    }

    const youtubeSrc = new URL(`https://www.youtube.com/embed/${videoId}`);
    youtubeSrc.searchParams.set('rel', '0');
    youtubeSrc.searchParams.set('modestbranding', '1');
    youtubeSrc.searchParams.set('playsinline', '1');
    if (playing) {
      youtubeSrc.searchParams.set('autoplay', '1');
      youtubeSrc.searchParams.set('mute', muted ? '1' : '0');
    }
    if (loop) {
      youtubeSrc.searchParams.set('loop', '1');
      youtubeSrc.searchParams.set('playlist', videoId);
    }
    if (controls) {
      youtubeSrc.searchParams.set('controls', '1');
    } else {
      youtubeSrc.searchParams.set('controls', '0');
    }

    return (
      <iframe
        className="video-embed video-embed__frame"
        src={youtubeSrc.toString()}
        title="YouTube video player"
        width={width}
        height={height}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        style={style}
      />
    );
  }

  return (
    <Player
      url={normalizedUrl}
      playing={playing}
      muted={muted}
      loop={loop}
      controls={controls}
      width={width}
      height={height}
      style={style}
    />
  );
}