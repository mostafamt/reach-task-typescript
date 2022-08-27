import React from "react";
import styles from "../styles/Body.module.css";
import HeaderResult from "./HeaderResult";
import List from "./List";

// function HeaderResult() {
//   return <div className={styles.headerResult}>HeaderResult</div>;
// }

interface PropTypes {
  videos: any;
  count: any;
}

function Body({ videos, count }: PropTypes) {
  return (
    <div className={styles.background}>
      <div className={styles.body}>
        <HeaderResult count={count} />
        <hr />
        <List videos={videos} />
      </div>
    </div>
  );
}

export default Body;
