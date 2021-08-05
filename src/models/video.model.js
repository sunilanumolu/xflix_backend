const mongoose = require("mongoose");
const config = require('../config/config');

const videoSchema = new mongoose.Schema(
  {
    videoLink: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
      enum: ["Education", "Sports", "Movies", "Comedy", "Lifestyle" ],
    },
    contentRating: {
      type: String,
      required: true,
      trim: true,
      enum: ["7+", "12+", "16+", "18+"],
    },
    releaseDate: {
      type: Date,
      required: true,
      trim: true,
    },
    previewImage: {
      type: String,
      required: true,
      trim: true,
    },
    votes: {
      type: {
        upVotes: Number,
        downVotes: Number,
      },
      required: true,
      default: config.default_votes,
    },
    viewCount: {
      type: Number,
      required: true,
      default: config.default_view_count,
    },
  },
);

/**
 * @typedef Video
 */

const Video = mongoose.model("Video", videoSchema);

module.exports = {Video};