const mongoose = require("mongoose");

// connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/blogDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// USER SCHEMA
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

// POST SCHEMA
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

// COMMENT SCHEMA
const commentSchema = new mongoose.Schema({
  text: String,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

// MODELS
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
const Comment = mongoose.model("Comment", commentSchema);

// INSERT DATA
async function run() {
  const user = await User.create({
    name: "Nayana",
    email: "nayana@test.com",
    password: "123456"
  });

  const post = await Post.create({
    title: "My First Blog",
    content: "Hello world",
    authorId: user._id
  });

  const comment = await Comment.create({
    text: "Nice post!",
    postId: post._id,
    userId: user._id
  });

  console.log("Data inserted successfully");
  mongoose.connection.close();
}

run();