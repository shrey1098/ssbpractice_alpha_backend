import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    // new date object
    views:{type: Number, default: 0},
    date: { type: Date, default: Date.now }
});

const Post =  mongoose.model("Post", postSchema);

export {Post};

