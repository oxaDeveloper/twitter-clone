import { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { content, userId } = req.body;
    const tweet = await db.tweet.create({
      data: {
        content,
        userId,
      },
    });
    res.status(201).json(tweet);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    await db.tweet.delete({
      where: {
        id: id as string,
      },
    });
  }
};
