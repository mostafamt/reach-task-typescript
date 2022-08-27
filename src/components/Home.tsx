import React from "react";
import Header from "./Header";
import { API_KEY, API_URL } from "../config/index";
import Body from "./Body";

function Home() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [videos, setVideos] = React.useState<[]>([]);
  const [count, setCount] = React.useState<number>(0);
  const [isSearch, setIsSearch] = React.useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getVideos(searchValue);
  };

  const getVideos = async (value: string) => {
    if (document.body.clientWidth <= 400) {
      setIsSearch(!isSearch);
    }
    setVideos([]);
    const res = await fetch(
      `${API_URL}?part=snippet&key=${API_KEY}&q=${value}&maxResults=10&type=channel,video`
    );
    const data = await res.json();
    console.log(data);
    setVideos(data.items);
    setCount(data.pageInfo.totalResults);
  };

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        submitHandler={submitHandler}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        getVideos={getVideos}
      />
      <Body videos={videos} count={count} />
    </>
  );
}

export default Home;
