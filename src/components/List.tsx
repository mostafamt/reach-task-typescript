import React from "react";
import Box from "./Box";
import styles from "../styles/List.module.css";

interface PropTypes {
  videos: any;
}

function List({ videos }: PropTypes) {
  return (
    <div
      className={[styles.list, videos.length > 0 ? styles.py : ""].join(" ")}
    >
      {videos.map((item: any, idx: number) => {
        return <Box key={idx} item={item} />;
      })}
    </div>
  );
}

export default List;
