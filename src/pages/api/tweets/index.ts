import { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const tweets = await db.tweet.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(tweets);
  }
};
