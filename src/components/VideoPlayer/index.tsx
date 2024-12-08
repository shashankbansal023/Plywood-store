export default function VideoPlayer() {
    const videoURL = "https://o23zkekqkj0pqojs.public.blob.vercel-storage.com/clideo_editor_ed53e0637f494349aba1cc69ba01db7f%20(online-video-cutter.com)-8LrQgcjtFoCNsYTwijAxbJx59F3KMi.mp4";
  
    return (
      <div>
        <video controls className="mx-auto w-[90%] max-w-[600px] md:w-[600px]">
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  