import React from "react";
import Box from "./Box";
import styles from "../styles/List.module.css";
import HeaderResult from "./HeaderResult";

interface PropTypes {
  videos: any;
}

function List({ videos }: PropTypes) {
  return (
    <div className={styles.list}>
      {videos.map((item: any, idx: number) => {
        return <Box key={idx} item={item} />;
      })}
    </div>
  );
}

export default List;
