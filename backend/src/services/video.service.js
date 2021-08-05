const {Video} = require('../models/video.model');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

/**
 * returns back all the available videos
 * @returns {Promise<List<Video>>}
 */

const getAllVideos = async (title, genres, contentRating, sortBy) => {
    //filter object to apply on find
    const filter = {};

    if (title != null) {
        filter.title = {$regex: title, $options: 'i'}
    }

    if (genres != null) {
        genres = genres.split(',');

        filter.genre = {$in: genres};
    }

    if (contentRating != null) {
        // console.log('ratings sec');
        let ratings = config.ratings;
        let indexOfRating = ratings.indexOf(contentRating);
        
        // if we have a valid rating
        if(indexOfRating != -1){
            let ratingsSubset = ratings.splice(0, indexOfRating + 1);
            // console.log(ratingsSubset);
            filter.contentRating = {$in: ratingsSubset};
        }

    }

    // console.log(filter);
    if (sortBy == null || sortBy == 'releaseDate') {
        const result = await Video.find(filter).sort({'releaseDate': -1});
        return result;

    } else if (sortBy == 'viewCount') {
        const result = await Video.find(filter).sort({'viewCount': -1});
        return result;
    }
}

/**
 * returns a video object found by given VideoId 
 * @param {ObjectId} videoId
 * @returns {Promise<Video>}
 */

const getVideoById = async (videoId) => {
    
    const video_byId = await Video.findById(videoId);

    if(video_byId == null) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No video is found with matching id');
    } else {
        return video_byId;
    }
}

/**
 * creates a new video object with the data from the request body
 * @param {Object} body
 * @returns {Promise<Video>}
 */

const createVideo = async (body) => {

    const video_created = await Video.create(body);

    return video_created;
}

/**
 * updates up vote of a video by videoId
 * @param {ObjectId} videoId
 * @param {Number} changeBy
 * @returns {Promise}
 */

const updateVideoUpVoteBy = async (videoId, changeBy) => {
    const video = await getVideoById(videoId);
    video.votes = {
        upVotes: video.votes.upVotes + changeBy,
        downVotes: video.votes.downVotes,
    };
    await video.save();
}

/**
 * updates down vote of a video by videoId
 * @param {ObjectId} videoId
 * @param {Number} changeBy
 * @returns {Promise}
 */

const updateVideoDownVoteBy = async (videoId, changeBy) => {
    const video = await getVideoById(videoId);
    video.votes = {
        upVotes: video.votes.upVotes,
        downVotes: video.votes.downVotes + changeBy,
    };
    await video.save();
}

/**
 * increments the views of a video by videoId
 * @param {ObjectId} videoId
 * @returns {Promise}
 */

const incrementVideoViews = async (videoId) => {

    const video = await getVideoById(videoId);

    video.viewCount++;
    await video.save();
}

module.exports = {
    getAllVideos,
    getVideoById,
    createVideo,
    updateVideoUpVoteBy,
    updateVideoDownVoteBy,
    incrementVideoViews,
}