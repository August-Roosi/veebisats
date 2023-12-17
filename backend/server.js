const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');

const port = process.env.PORT || 8000;
const app = express();

const pool = new Pool({
  user: "postgres",
  password: "parool",
  database: "veebiRakendused",
  host: "localhost",
  port: "5432"
});

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());
app.options('/api/upload', cors());

// CREATE - Insert a new post
app.post('/api/posts', async (req, res) => {
  try {
    console.log("A post request has arrived");
    const post = req.body;
    const newPost = await pool.query(
      "INSERT INTO posts(posttext, postcreatedate, posttime, tags, likecount, comments, userid, postimage) VALUES ($1, current_timestamp, current_timestamp, $2, $3, $4, $5, $6) RETURNING *",
      [post.posttext, post.tags, post.likecount, post.comments, post.userid, post.postimage]
    );
    res.json(newPost.rows[0]); 
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// READ - Get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const allPosts = await pool.query("SELECT * FROM posts");
    res.json(allPosts.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// READ - Get a specific post by ID
app.get('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await pool.query("SELECT * FROM posts WHERE postid = $1", [id]);
    res.json(post.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE - Update a post by ID
app.put('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    const updatedPost = await pool.query(
      "UPDATE posts SET posttext = $1, tags = $2, likecount = $3, comments = $4, userid = $5, postimage = $6 WHERE postid = $7 RETURNING *",
      [post.posttext, post.tags, post.likecount, post.comments, post.userid, post.postimage, id]
    );
    res.json(updatedPost.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE - Delete a post by ID
app.delete('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM posts WHERE postid = $1", [id]);
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete('/api/posts/', async (req, res) => {
  try {
    await pool.query("DELETE FROM posts");
    res.json({ message: "Posts deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// CREATE - Insert a new user
app.post('/api/users', async (req, res) => {
  try {
    console.log("A user registration request has arrived");
    const user = req.body;
    const newUser = await pool.query(
      "INSERT INTO users(username, userimage) VALUES ($1, $2) RETURNING *",
      [user.username, user.userimage]
    );
    res.json(newUser.rows[0]); 
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// READ - Get all users
app.get('/api/users', async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// READ - Get a specific user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE userid = $1", [id]);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE - Update a user by ID
app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updatedUser = await pool.query(
      "UPDATE users SET username = $1, userimage = $2 WHERE userid = $3 RETURNING *",
      [user.username, user.userimage, id]
    );
    res.json(updatedUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE - Delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM users WHERE userid = $1", [id]);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
