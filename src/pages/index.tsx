import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import axios from "axios";

export default function Home() {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const response = await axios.get("/api/tweets");
    setTweets(response.data);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  const deleteTweet = async (id: number) => {
    await axios.delete(`/api/tweet?id=${id}`);
    await fetchTweets();
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto mt-4 max-w-2xl">
        <TweetForm fetchTweets={fetchTweets} />
        <TweetList tweets={tweets} deleteTweet={deleteTweet} />
      </div>
    </div>
  );
}
