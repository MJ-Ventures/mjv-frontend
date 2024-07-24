export default function BlogImageBlock({ image }) {
    if(!image) return
  return <img src={image} className="h-full max-w-max max-h-80 mx-auto" />;
}
