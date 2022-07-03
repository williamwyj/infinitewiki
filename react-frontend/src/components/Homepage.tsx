import Navigation from "./Navigation";

export default function Homepage() {
  return (
    <div>
      <Navigation />
      <video
        src='/video/homepage/homepage_video.mp4'
        muted={true}
        loop={true}
        autoPlay={true}
        width='100%'
      ></video>
    </div>
  );
}
