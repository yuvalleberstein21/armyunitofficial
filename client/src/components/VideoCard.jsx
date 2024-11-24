

const VideoCard = () => {
    return (
        <div className="video-container">
            <img
                src="https://img.youtube.com/vi/Ax4-63bbkvc/maxresdefault.jpg"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
            />
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Ax4-63bbkvc?autoplay=1&loop=1&playlist=Ax4-63bbkvc&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default VideoCard