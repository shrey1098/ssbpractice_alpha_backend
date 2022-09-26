import { Post } from "../models/blogpost.js";


const getPost = async (req, res) => {
    try {
        // check if post exist
        const post = await Post.findByIdAndUpdate(req.params.id, {$inc: {views: 1}}).select("title author views date");
        if(!post){
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

const getPosts = async (req, res) => {
    try{
        // get last 20 posts return only title, author, date and _id
        const posts = await Post.find().sort({date: -1}).limit(20).select("title author date _id");
        res.status(200).json(posts);

    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

const searchPosts = async (req, res) => {
    // serach for posts by title or author
    const {search} = req.query;
    try{
        const posts = await Post.find({$or: [{title: {$regex: search, $options: "i"}}, {author: {$regex: search, $options: "i"}}]}).sort({date: -1}).limit(20).select("title", "author", "date", "_id");
        res.status(200).json(posts);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

const postPost = async (req, res) => {
    // post a new post
    const {title, content, author, password} = req.body;
    try{
        if (password !== process.env.PASSWORD){
            return res.status(401).json({message: "Unauthorized"});
        }
        // check if the post content is unique
        const post = await Post.findOne({content});
        if(post){
            return res.status(400).json({message: "Post already exists", post});
        }
        const newPost = new Post({title, content, author});
        await newPost.save();
        res.status(200).json(newPost);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

const updatePost = async (req, res) => {
    // update a post
    const {id} = req.params;
    const {title, content, author, password} = req.body;
    try{
        if (password !== process.env.PASSWORD){
            return res.status(401).json({message: "Unauthorized"});
        }
        const post = await Post.findByIdAndUpdate(id, {title, content, author}, {new: true});
        res.status(200).json(post);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

const deletePost = async (req, res) => {
    // delete a post
    const {id} = req.params;
    const {password} = req.body;
    try{
        if (password !== process.env.PASSWORD){
            return res.status(401).json({message: "Unauthorized"});
        }
        // check if post exists
        const post = await Post.findById(id);
        if(!post){
            return res.status(400).json({message: "Post does not exist"});
        }
        await Post.findByIdAndDelete(id);
        
        res.status(200).json({post, message: "Post deleted"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

export { getPost, getPosts, searchPosts, postPost, updatePost, deletePost };