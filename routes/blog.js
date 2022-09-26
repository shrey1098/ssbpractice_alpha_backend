import experss from 'express';
import { getPost, getPosts, searchPosts,  postPost, updatePost, deletePost } from '../controllers/blog.js';

const router = experss.Router();

router.get('/post/:id', (req, res) => {
    // get post by _id
    // usage example: /blog/post/5f9f9f9f9f9f9f9f9f9f9f9f
    // returns: {title: "title", content: "content", author: "author", date: "date"}
    getPost(req, res);
})

router.get('/posts', (req, res) => {
    // get last 20 posts return only title, author, date and _id
    // usage example: /blog/posts
    // returns: [{title: "title", author: "author", date: "date", _id: "id"}, {title: "title", author: "author", date: "date", _id: "id"}]
    getPosts(req, res);
})

router.get('/search', (req, res) => {
    // serach for posts by title or author
    // usage example: /blog/search?search=example
    // returns: [{title: "title", author: "author", date: "date", _id: "id"}, {title: "title", author: "author", date: "date", _id: "id"}]
    searchPosts(req, res);
})

router.post('/post', (req, res) => {
    // post a new post
    // usage example: /blog/post
    // body: {title: "title", content: "content", author: "author"}
    // returns: {title: "title", content: "content", author: "author", date: "date"}
    postPost(req, res);
})

router.put('/post/:id', (req, res) => {
    // update a post
    // usage example: /blog/post/5f9f9f9f9f9f9f9f9f9f9f9f
    // body: {title: "title", content: "content", author: "author"}
    // returns: {title: "title", content: "content", author: "author", date: "date"}
    updatePost(req, res);
})

router.delete('/post/:id', (req, res) => {
    // delete a post
    // usage example: /blog/post/5f9f9f9f9f9f9f9f9f9f9f9f
    // returns: {title: "title", content: "content", author: "author", date: "date"}
    deletePost(req, res);
})


export {router as blogRouter};
