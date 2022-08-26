import React from "react";
import styles from "../styles/Header.module.css";
import { FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import imgSrc from "../res/profile.jpg";

interface PropTypes {
  searchValue: string;
  setSearchValue: any;
  submitHandler: any;
}

function Header({ searchValue, setSearchValue, submitHandler }: PropTypes) {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <FaYoutube className={styles.logo} />
        <span className={styles.title}>YouTube</span>
      </div>

      <form className={styles.actions} onSubmit={submitHandler}>
        <input
          type="text"
          className={styles.textInput}
          placeholder="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={styles.searchButton}>
          <FiSearch className={styles.search_logo} />
        </button>
      </form>
      <div className={styles.profile}>
        <img src={imgSrc} alt="profile" className={styles.profile_pic} />
      </div>
    </div>
  );
}

export default Header;
