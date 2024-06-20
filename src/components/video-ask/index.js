export default function VideoAskWidget() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.VIDEOASK_EMBED_CONFIG = {
              "kind": "widget",
              "url": "https://www.videoask.com/furbbqq47",
              "options": {
                "widgetType": "VideoThumbnailWindowTall",
                "text": "",
                "backgroundColor": "#7D00FE",
                "position": "bottom-left",
                "dismissible": true,
                "videoPosition": "left bottom"
              }
            }
          `,
        }}
      />
      <script src="https://www.videoask.com/embed/embed.js"></script>
    </>
  );
}
