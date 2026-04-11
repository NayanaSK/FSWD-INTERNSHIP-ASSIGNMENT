const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crudLab")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model("User", userSchema);

// CREATE
app.post("/create", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send("User Created");
});

// READ
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// UPDATE
app.put("/update/:id", async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("User Updated");
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send("User Deleted");
});

app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});