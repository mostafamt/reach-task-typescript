import React from "react";
import styles from "../styles/Box.module.css";
import Iframe from "react-iframe";

function Box({ item }: any) {
  let thumb = <></>;
  if (item.id.kind === "youtube#channel") {
    thumb = (
      <img
        referrerPolicy="no-referrer"
        src={item.snippet.thumbnails.medium.url}
        alt="src"
        width="210px"
        height="210px"
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
    );
  } else {
    thumb = (
      //-c8LoR84Xjs
      // https://www.youtube.com/embed/-c8LoR84Xjs
      <Iframe
        url={`https://www.youtube.com/embed/${item.id.videoId}`}
        width="360px"
        height="201px"
        allowFullScreen
        // frameBorder={0}
      ></Iframe>
    );
  }

  return (
    <div className={styles.box}>
      <div className={styles.video}>{thumb}</div>
      <div className={styles.box_description}>
        <h4>{item.snippet.title}</h4>
        <p>{item.snippet.description}</p>
      </div>
    </div>
  );
}

export default Box;
