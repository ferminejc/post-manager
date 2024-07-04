import { Post } from '../interfaces/Post';

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: 'LOADING' }
  | { type: 'FETCH_POSTS_SUCCESS'; payload: Post[] }
  | { type: 'FETCH_POSTS_ERROR'; payload: string }
  | { type: 'ADD_POST_SUCCESS'; payload: Post }
  | { type: 'ADD_POST_ERROR'; payload: string }
  | { type: 'EDIT_POST_SUCCESS'; payload: Post }
  | { type: 'EDIT_POST_ERROR'; payload: string }
  | { type: 'REMOVE_POST_SUCCESS'; payload: number }
  | { type: 'REMOVE_POST_ERROR'; payload: string };

export const postReducer = (state: PostState, action: Action): PostState => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: null };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, posts: action.payload };
    case 'FETCH_POSTS_ERROR':
    case 'ADD_POST_ERROR':
    case 'EDIT_POST_ERROR':
    case 'REMOVE_POST_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_POST_SUCCESS':
      return { ...state, loading: false, posts: [action.payload, ...state.posts] };
    case 'EDIT_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      };
    case 'REMOVE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    default:
      return state;
  }
};