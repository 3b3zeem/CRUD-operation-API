const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

let posts = [];

// Get All posts
app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

// Add new post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content,
  };
  posts.push(newPost);
  res.status(201).json({ post: newPost, message: "Post added successfully!" });
});

// Update post
app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));

  if (postIndex !== -1) {
    posts[postIndex] = { id: parseInt(id), title, content };
    res
      .status(200)
      .json({ post: posts[postIndex], message: "Post updated successfully!" });
  } else {
    res.status(404).json({ message: "Post not found!" });
  }
});

// Delete post
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));

  if (postIndex !== -1) {
    const deletedPost = posts.splice(postIndex, 1);
    res.status(200).json({
      post: deletedPost,
      message: "Post deleted Successfully!",
    });
  } else {
    res.status(404).json({ message: "post not found" });
  }
});

// Get all Posts reversed
app.get("/posts/sortedReverse", (req, res) => {
  const reversed = [...posts].reverse();
  res
    .status(200)
    .json({ post: reversed, message: "Post reversed Successfully!" });
});

// search  post by id
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === parseInt(id));

  if (post !== -1) {
    res.status(200).json({ post: post });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

app.use((req, res, next) => {
    res.status(404).json({ message: "Endpoint not found" });
  });

app.listen(4444, () => {
  console.log("Server is running on http://localhost:4444");
});
