const { path: ffmpegPath } = require("@ffmpeg-installer/ffmpeg");
const { spawnSync } = require("child_process");

const jobs = [
  {
    input: "public/assets/videos/speech.mp4",
    mp4: "public/assets/videos/speech-optimized.mp4",
    webm: "public/assets/videos/speech-optimized.webm",
  },
  {
    input: "public/assets/videos/WhatsApp Video 2026-05-16 at 20.27.31.mp4",
    mp4: "public/assets/videos/testimonial-1-optimized.mp4",
    webm: "public/assets/videos/testimonial-1-optimized.webm",
  },
  {
    input: "public/assets/videos/WhatsApp Video 2026-05-16 at 20.30.36.mp4",
    mp4: "public/assets/videos/testimonial-2-optimized.mp4",
    webm: "public/assets/videos/testimonial-2-optimized.webm",
  },
  {
    input: "public/assets/videos/WhatsApp Video 2026-05-16 at 20.30.37.mp4",
    mp4: "public/assets/videos/testimonial-3-optimized.mp4",
    webm: "public/assets/videos/testimonial-3-optimized.webm",
  },
];

for (const job of jobs) {
  console.log(`Converting ${job.input} -> ${job.mp4}`);

  const mp4Args = [
    "-y",
    "-i",
    job.input,
    "-vf",
    "scale='min(1280,iw)':-2",
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-crf",
    "28",
    "-movflags",
    "+faststart",
    "-c:a",
    "aac",
    "-b:a",
    "96k",
    job.mp4,
  ];

  const mp4Result = spawnSync(ffmpegPath, mp4Args, { stdio: "inherit" });

  if (mp4Result.status !== 0) {
    process.exit(mp4Result.status ?? 1);
  }

  console.log(`Converting ${job.input} -> ${job.webm}`);

  const webmArgs = [
    "-y",
    "-i",
    job.input,
    "-vf",
    "scale='min(1280,iw)':-2",
    "-c:v",
    "libvpx-vp9",
    "-b:v",
    "0",
    "-crf",
    "36",
    "-c:a",
    "libopus",
    "-b:a",
    "64k",
    job.webm,
  ];

  const webmResult = spawnSync(ffmpegPath, webmArgs, { stdio: "inherit" });

  if (webmResult.status !== 0) {
    process.exit(webmResult.status ?? 1);
  }
}

console.log("All MP4 and WebM conversions completed.");
