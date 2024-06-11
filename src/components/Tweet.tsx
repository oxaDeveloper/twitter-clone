import Image from "next/image";

const Tweet = ({ tweet, deleteTweet }: any) => {
  return (
    <div
      className="mb-4 border p-4"
      onClick={() => {
        if (confirm("Do you want to delete this tweet?")) {
          deleteTweet(tweet.id);
        }
      }}
    >
      <div className="flex items-center gap-3 font-bold">
        <div className="h-9 w-9">
          <Image
            src={tweet.user.image}
            alt=""
            width={1080}
            height={1080}
            className="rounded-full"
          />
        </div>
        <h1 className="text-lg">{tweet.user.name}</h1>
      </div>

      <div className="mt-3">
        <p>{tweet.content}</p>
      </div>

      <div className="text-right text-sm text-gray-500">
        <span>{new Date(tweet.createdAt).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Tweet;
