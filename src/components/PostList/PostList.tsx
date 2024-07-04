import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Post } from '../../interfaces/Post';
import { usePostContext } from '../../context/PostContext';
import { removePost } from '../../context/PostActions';

interface PostListProps {
  onEdit: (post: Post) => void;
}

const PostList: React.FC<PostListProps> = ({ onEdit }) => {
  const { state, dispatch } = usePostContext();
  const { posts } = state;

  const handleDelete = (id: number) => {
    removePost(dispatch, id);
  };

  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post.id} secondaryAction={
          <>
            <IconButton edge="end" aria-label="edit" onClick={() => onEdit(post)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(post.id!)}>
              <DeleteIcon />
            </IconButton>
          </>
        }>
          <ListItemText primary={post.title} secondary={post.body} />
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;