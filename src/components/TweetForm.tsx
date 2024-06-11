import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const TweetForm = ({ fetchTweets }: { fetchTweets: Function }) => {
  const { data: session } = useSession();
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (content !== "") {
      await axios.post("/api/tweet", {
        content: content,
        userId: session?.user.id,
      });
      setContent("");
      await fetchTweets();
    }
  };

  return (
    <div className="mt-4">
      <textarea
        className="w-full rounded border p-2"
        rows={3}
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
      >
        <p>Tweet</p>
      </button>
    </div>
  );
};

export default TweetForm;
