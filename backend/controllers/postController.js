const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');

// @desc   Get posts
// @route  GET /api/posts
// @access Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();

  res.json(goals);
});

// @desc   Set post
// @route  GET /api/posts
// @access Private
const setPost = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const post = await Post.create({
    text: req.body.text,
  });

  res.status(200).json(post);
});

// @desc   Update post
// @route  GET /api/posts/:id
// @access Private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    nex: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc   Delete post
// @route  GET /api/posts/:id
// @access Private
const deletePost = asyncHandler((req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  await post.remove()


  res.status(200).json({id: req.params.id});
});

module.exports = {
  getPosts,
  setPost,
  updatePost,
  deletePost,
};
