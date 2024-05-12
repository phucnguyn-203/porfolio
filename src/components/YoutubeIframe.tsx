export default function YoutubeIframe({ url }: { url: string }) {
  return (
    <div className="w-[560px] h-[360px]">
      <iframe
        className="w-full h-full bg-white rounded-lg shadow-md mb-28"
        src={url}
        title="YouTube video player"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
