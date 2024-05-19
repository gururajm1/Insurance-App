import React from "react";

const YouTubeEmbed = ({ embedId }) => {
  return (
    <div className="flex justify-center my-8">
      <div className="relative overflow-hidden pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;
