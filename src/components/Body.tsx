import React from "react";
import styles from "../styles/Body.module.css";
import HeaderResult from "./HeaderResult";
import List from "./List";
import Loader from "./Loader";

interface PropTypes {
  videos: any;
  count: any;
  loading: boolean;
  setLoading: any;
}

function Body({ videos, count, loading, setLoading }: PropTypes) {
  return (
    <div className={styles.background}>
      <div className={styles.body}>
        <HeaderResult count={count} />
        <hr />
        <List videos={videos} loading={loading} setLoading={setLoading} />
      </div>
    </div>
  );
}

export default Body;
