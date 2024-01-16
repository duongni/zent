import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const response = await fetch("http://localhost:3000/api");
  const data = await response.json();

  res.status(200).json(data);
};

export default handler;
