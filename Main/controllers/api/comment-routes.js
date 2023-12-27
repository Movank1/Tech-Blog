const express = require('express');
const router = express.Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const { body } = req;
    const userId = req.session.userId;

    const newComment = await Comment.create({
      body,
      userId
    });

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
