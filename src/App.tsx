import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { usePostContext } from './context/PostContext';
import { fetchPosts } from './context/PostActions';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import { Post } from './interfaces/Post';

const App: React.FC = () => {
  const { state, dispatch } = usePostContext();
  const { posts, loading, error } = state;
  const [currentPost, setCurrentPost] = useState<Post>({ title: '', body: '' });

  useEffect(() => {
    fetchPosts(dispatch);
  }, [dispatch]);

  const handleEditPost = (post: Post) => {
    setCurrentPost(post);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Post Manager
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <>
          <PostForm initialPost={currentPost} />
          <PostList onEdit={handleEditPost} />
        </>
      )}
    </Container>
  );
};

export default App;
