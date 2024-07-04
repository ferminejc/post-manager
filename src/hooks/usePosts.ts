import { useEffect } from 'react';
import { fetchPosts } from '../context/PostActions';
import { usePostContext } from '../context/PostContext';

export const usePosts = () => {
  const { state, dispatch } = usePostContext();

  useEffect(() => {
    fetchPosts(dispatch);
  }, [dispatch]);

  return state;
};
