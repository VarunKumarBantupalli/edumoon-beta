import React, { useEffect, useState } from 'react';

const youtubeVideos = [
  {
    id: 'video1',
    link: 'https://www.youtube.com/live/dG4MnKt-XIg?si=tOwIJIxWzYl4T99w',
  },
  {
    id: 'video2',
    link: 'https://www.youtube.com/live/pmN6-rChfjk?si=N4bpINCO1VnIZ7iv',
  },
  {
    id: 'video3',
    link: 'https://www.youtube.com/live/vf0bFM2FzBQ?si=18aWgB_lMxU8Srfj',
  },
  //{
    //  id: 'video4',
    //link: 'https://www.youtube.com/live/oYSKu6BZ9BY?si=88tXwJ6NFE3HA3rA',
  //},
  // Add more videos as needed
];

// Utility function to extract video ID from YouTube URL
const getYoutubeVideoID = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|live\/|v\/)?([^?&/\s]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const UpComing = () => {
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    // Dynamically generate thumbnail URLs based on video IDs
    const videoData = youtubeVideos.map(video => {
      const videoID = getYoutubeVideoID(video.link);
      return {
        ...video,
        thumbnails: [
          `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`,  // Highest resolution
          `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`,      // High quality
          `https://img.youtube.com/vi/${videoID}/mqdefault.jpg`,      // Medium quality
          `https://img.youtube.com/vi/${videoID}/default.jpg`,        // Default resolution
        ],
        videoID,
      };
    });
    setThumbnails(videoData);
  }, []);

  return (
    <div className="w-full max-w-8xl mx-auto p-4 bg-white shadow-lg rounded-lg m-3">
      <div className="text-center mt-4 flex justify-center items-center p-4">
        <p className="text-2xl text-[#2C3E50] font-bold mb-2">UPCOMING EVENTS!</p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex items-center animate-scroll whitespace-nowrap">
          {thumbnails.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 inline-block"
            >
              <img
                src={video.thumbnails[0]} // Try the highest resolution first
                onError={(e) => {
                  // On error, try lower resolution thumbnails
                  if (e.target.src !== video.thumbnails[1]) {
                    e.target.src = video.thumbnails[1];
                  } else if (e.target.src !== video.thumbnails[2]) {
                    e.target.src = video.thumbnails[2];
                  } else if (e.target.src !== video.thumbnails[3]) {
                    e.target.src = video.thumbnails[3];
                  }
                }}
                alt={`workshop-video-${index}`}
                className="h-64 w-auto" // Set height and auto width for better proportions
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpComing;
