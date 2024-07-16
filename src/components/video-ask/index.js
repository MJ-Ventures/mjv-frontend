import Script from "next/script";
export default function VideoAskWidget() {
  const VIDEO_ASK_CONFIG = `{
    kind: "widget",
    url: "https://www.videoask.com/f78yoijad",
    options: {
      widgetType: "VideoThumbnailWindowTall",
      text: "",
      backgroundColor: "#7D00FE",
      position: "bottom-left",
      dismissible: false,
      videoPosition: "center center",
    },
  }`;

  return (
    <>
      <Script
        id="videoask"
        dangerouslySetInnerHTML={{
          __html: `
            window.VIDEOASK_EMBED_CONFIG = ${VIDEO_ASK_CONFIG};
          `,
        }}
      />
      <Script
        id="videoask-script"
        src="https://www.videoask.com/embed/embed.js"
      ></Script>
    </>
  );
}
