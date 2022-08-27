import React from "react";
import styles from "../styles/HeaderResult.module.css";
import { BiFilter } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

// AiFillCaretDown
interface PropTypes {
  count: any;
}

function HeaderResult({ count }: PropTypes) {
  return (
    <>
      <div className={styles.headerResult}>
        <p className={styles.filterCount}>{`About ${count} results`}</p>
        <button className={styles.filterButton}>
          <BiFilter className={styles.filterIcon} />
          <span className={styles.filterText}>filter</span>
        </button>
      </div>
      <div className={styles.headerResult_sm}>
        <button className={styles.headerResultButton}>
          <span>All</span> <AiFillCaretDown />
        </button>
        <button className={styles.headerResultButton}>
          <span>Anytime</span> <AiFillCaretDown />
        </button>
      </div>
    </>
  );
}

export default HeaderResult;
