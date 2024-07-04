import axios, { AxiosError } from 'axios';
import { Post } from '../interfaces/Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const getErrorMessage = (error: AxiosError): string => {
  if (error.response) {
    if (error.response.status === 500) {
      return 'Internal Server Error: This is likely due to the limitations of the mock API. Please try with IDs between 1 and 100.';
    }
    if (error.response.data && typeof error.response.data === 'object') {
      const data = error.response.data as { message?: string };
      return data.message || 'An error occurred';
    }
  }
  return 'An error occurred';
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(API_URL);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(getErrorMessage(axiosError));
  }
};

export const createPost = async (post: Post): Promise<Post> => {
  try {
    const response = await axios.post<Post>(API_URL, post);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(getErrorMessage(axiosError));
  }
};

export const updatePost = async (post: Post): Promise<Post> => {
  try {
    const response = await axios.put<Post>(`${API_URL}/${post.id}`, post);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(getErrorMessage(axiosError));
  }
};

export const deletePost = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(getErrorMessage(axiosError));
  }
};
