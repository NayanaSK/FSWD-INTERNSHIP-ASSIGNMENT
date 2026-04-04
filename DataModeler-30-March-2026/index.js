const mongoose = require("mongoose");

const User = require("./models/User");
const Post = require("./models/Post");
const Comment = require("./models/Comment");

mongoose.connect("mongodb://127.0.0.1:27017/blogPlatform")
.then(() => {
    console.log("✅ Connected to MongoDB");
    run();
})
.catch(err => console.log(err));

async function run() {
    try {
        // Create user
        const user = new User({
            name: "Nayana",
            email: "nayana@gmail.com",
            password: "12345"
        });
        await user.save();

        // Create post
        const post = new Post({
            title: "My First Blog",
            content: "This is my first blog post",
            author: user.name
        });
        await post.save();

        // Create comment
        const comment = new Comment({
            postId: post._id,
            userId: user._id,
            comment: "Great post!"
        });
        await comment.save();

        console.log("✅ Blogging data inserted");
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.connection.close();
    }
}