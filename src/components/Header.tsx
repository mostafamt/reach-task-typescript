import React from "react";
import styles from "../styles/Header.module.css";
import { FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import imgSrc from "../res/profile.jpg";

interface PropTypes {
  searchValue: string;
  setSearchValue: any;
  submitHandler: any;
  isSearch: boolean;
  setIsSearch: any;
  getVideos: any;
}

function Header({
  searchValue,
  setSearchValue,
  submitHandler,
  isSearch,
  setIsSearch,
  getVideos,
}: PropTypes) {
  const clickHandler = () => {
    if (isSearch) {
      setIsSearch(false);
    } else {
      getVideos(searchValue);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <FaYoutube className={styles.logo} />
        <span className={styles.title}>YouTube</span>
      </div>

      <form className={styles.actions} onSubmit={submitHandler}>
        {isSearch ? (
          <p className={styles.searchText}>{searchValue}</p>
        ) : (
          <input
            type="text"
            className={styles.textInput}
            placeholder="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
        <button className={styles.searchButton}>
          <FiSearch className={styles.search_logo} />
        </button>
      </form>
      <div className={styles.profile}>
        <img src={imgSrc} alt="profile" className={styles.profile_pic} />
      </div>
      <button className={styles.searchButton_sm} onClick={clickHandler}>
        <FiSearch className={styles.search_logo} />
      </button>
    </div>
  );
}

export default Header;
