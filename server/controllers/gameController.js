import axios from 'axios';
import asyncHandler from "express-async-handler";

const getGameData = asyncHandler(async (req, res) => {
  const result = await axios.get(req.originalUrl, {
    baseURL: process.env.API_URL,
    headers: {
      ContentType: 'application/json',
      charset: 'utf-8',
    },
    params: {
      key: process.env.API_TOKEN,
      ...req.query
    },
  });
  res.json(result.data);
});

export { getGameData };
