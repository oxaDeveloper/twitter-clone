import Tweet from "./Tweet";

const TweetList = ({ tweets, deleteTweet }: any) => {
  return (
    <div className="mt-5 border-t border-black pt-5">
      {tweets.map((tweet: any) => (
        <Tweet key={tweet.id} tweet={tweet} deleteTweet={deleteTweet} />
      ))}
    </div>
  );
};

export default TweetList;
