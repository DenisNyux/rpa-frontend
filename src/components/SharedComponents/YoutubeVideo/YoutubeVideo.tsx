import React from "react";

import styles from "./YoutubeVideo.module.css";

interface YoutubeVideoProps {
  videoId: string;
}
function YoutubeVideo({ videoId }: YoutubeVideoProps) {
  return (
    <div className={styles.responsiveVideo}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default YoutubeVideo;
