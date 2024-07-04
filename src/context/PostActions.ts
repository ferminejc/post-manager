import { Post } from '../interfaces/Post';
import { createPost, deletePost, getPosts, updatePost } from '../services/postService';

export const fetchPosts = async (dispatch: React.Dispatch<any>) => {
  dispatch({ type: 'LOADING' });
  try {
    let posts = await getPosts();
    posts = posts.sort((a, b) => (b.id! - a.id!)); // Sort posts by id in descending order
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: posts });
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_ERROR', payload: error });
  }
};

export const addPost = async (dispatch: React.Dispatch<any>, post: Post) => {
  dispatch({ type: 'LOADING' });
  try {
    const newPost = await createPost(post);
    dispatch({ type: 'ADD_POST_SUCCESS', payload: newPost });
  } catch (error) {
    dispatch({ type: 'ADD_POST_ERROR', payload: error });
  }
};

export const editPost = async (dispatch: React.Dispatch<any>, post: Post) => {
  dispatch({ type: 'LOADING' });
  try {
    const updatedPost = await updatePost(post);
    dispatch({ type: 'EDIT_POST_SUCCESS', payload: updatedPost });
  } catch (error) {
    dispatch({ type: 'EDIT_POST_ERROR', payload: error });
  }
};

export const removePost = async (dispatch: React.Dispatch<any>, id: number) => {
  dispatch({ type: 'LOADING' });
  try {
    await deletePost(id);
    dispatch({ type: 'REMOVE_POST_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'REMOVE_POST_ERROR', payload: error });
  }
};
