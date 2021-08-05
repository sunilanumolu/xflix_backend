const Joi = require("joi");
const config = require('../config/config');
const { objectId, genres, videoLink } = require("./custom.validation");

const filterVideoByParams = {
    query: Joi.object().keys({
        title: Joi.string(),
        genres: Joi.string().custom(genres),
        sortBy: Joi.string().valid('viewCount', 'releaseDate'),
        contentRating: Joi.string().valid(...config.ratings),
    }),
};

const videoById = {
    params: Joi.object().keys({
        videoId: Joi.string().required().custom(objectId),
    }),
};

const videoUpload = {
    body: Joi.object().keys({
        videoLink: Joi.string().required(),
        title: Joi.string().required(),
        genre: Joi.string().required().custom(genres),
        contentRating: Joi.string().valid(...config.ratings),
        releaseDate: Joi.string().required(),
        previewImage: Joi.string().required(),
    }),
};

module.exports = {
  filterVideoByParams,
  videoById,
  videoUpload,
};