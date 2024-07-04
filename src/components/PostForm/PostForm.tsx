import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Post } from '../../interfaces/Post';
import { usePostContext } from '../../context/PostContext';
import { addPost, editPost } from '../../context/PostActions';

interface PostFormProps {
  initialPost: Post;
}

const PostForm: React.FC<PostFormProps> = ({ initialPost }) => {
  const [post, setPost] = useState<Post>(initialPost);
  const { dispatch } = usePostContext();

  useEffect(() => {
    setPost(initialPost);
  }, [initialPost]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (post.id) {
      editPost(dispatch, post);
    } else {
      addPost(dispatch, post);
    }
    setPost({ title: '', body: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        name="title"
        label="Title"
        value={post.title}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        name="body"
        label="Body"
        value={post.body}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
};

export default PostForm;
