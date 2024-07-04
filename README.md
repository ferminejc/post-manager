# Post Manager Application

This is a simple React application for managing posts using CRUD (Create, Read, Update, Delete) operations. It demonstrates advanced state management, component composition, and reusable design patterns using React Hooks and Material UI for the design.

## Features

- Fetch and display a list of posts
- Add a new post
- Edit an existing post
- Delete a post
- Display post IDs along with their titles and bodies
- Handle errors gracefully and display appropriate messages

## Technologies Used

- React
- TypeScript
- Material UI
- Axios
- Context API and useReducer for state management

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ferminejc/post-manager.git
   cd post-manager

2. Install dependencies:
   ```npm install```

3. Run the application
   ```npm start```
   The application will start on http://localhost:3000.

4. Usage
   Fetching Posts: The application fetches posts from the JSONPlaceholder API and displays them in a list.
   Adding a Post: Fill in the form and click "Save" to add a new post. The new post will appear at the top of the list.
   Editing a Post: Click the edit icon next to a post, modify the details in the form, and click "Save" to update the post.
   Deleting a Post: Click the delete icon next to a post to remove it from the list.

5. Error Handling
   The application handles errors gracefully and displays appropriate messages to the user. For example, if an attempt is made to update a post with an ID greater than 100, an error message will inform the user about the mock API's limitations.
