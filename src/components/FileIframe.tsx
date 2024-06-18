export default function FileIframe({ url }: { url: string }) {
  return (
    <div className="w-[800px] h-[500px]">
      <iframe
        className="w-full h-full bg-white shadow-md mb-28"
        src={url}
        title="Art Performance File"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
