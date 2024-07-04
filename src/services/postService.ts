import axios from "axios";
import { Post } from "../interfaces/Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const response = await axios.get<Post[]>(API_URL);
  return response.data;
};

export const createPost = async (post: Post) => {
  const response = await axios.post<Post>(API_URL, post);
  return response.data;
};

export const updatePost = async (post: Post) => {
  const response = await axios.put<Post>(`${API_URL}/${post.id}`, post);
  return response.data;
};

export const deletePost = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
