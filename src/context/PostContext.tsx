import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { Post } from '../interfaces/Post';
import { postReducer } from './PostReducer';

interface PostProviderProps {
  children: ReactNode;
}

interface PostContextProps {
  state: { posts: Post[]; loading: boolean; error: string | null };
  dispatch: React.Dispatch<any>;
}

const PostContext = createContext<PostContextProps | undefined>(undefined);

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const PostProvider = ({ children }: PostProviderProps) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};
