import ReactPlayer from "react-player";

export default function BlogVideoBlock({ videoUrl }) {
  if (!videoUrl) return;
  return (
    <div className="h-full max-w-max mb-10 max-h-80 mx-auto">
      <ReactPlayer controls url={videoUrl} />
    </div>
  );
}
