import React from "react";
import Box from "./Box";
import styles from "../styles/List.module.css";
import Loader from "./Loader";

interface PropTypes {
  videos: any;
  loading: boolean;
  setLoading: any;
}

function List({ videos, loading, setLoading }: PropTypes) {
  React.useEffect(() => {
    if (loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading, setLoading]);

  return (
    <div className={loading ? styles.center : styles.list}>
      {loading ? (
        <Loader />
      ) : (
        videos.map((item: any, idx: number) => {
          return <Box key={idx} item={item} />;
        })
      )}
    </div>
  );
}

export default List;
