import React from "react";
import Header from "./Header";
import { API_KEY, API_URL } from "../config/index";
import List from "./List";

function Home() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [videos, setVideos] = React.useState<[]>([]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getVideos(searchValue);
    setSearchValue("");
  };

  const getVideos = async (value: string) => {
    setVideos([]);
    const res = await fetch(
      `${API_URL}?part=snippet&key=${API_KEY}&q=${value}&maxResults=10&type=channel,video`
    );
    const data = await res.json();
    console.log(data);
    setVideos(data.items);
  };

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        submitHandler={submitHandler}
      />
      <List videos={videos} />
    </>
  );
}

export default Home;
