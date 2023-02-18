import axios from "axios";
import { NewsData } from "types/newsTypes";

const server = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const apiGetNewsList = async () => {
  try {
    const response = await server.get("/posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
