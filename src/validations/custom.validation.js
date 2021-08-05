const config = require('../config/config');

const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

const genres = (value, helpers) => {
  if (value == null) return true;
  
  const genreTypes = [config.genre_education, config.genre_sports, config.genre_movies, config.genre_comedy, config.genre_lifestyle];
  const arr = value.split(',');

  for (let i=0; i<arr.length; i++){
    const genre = arr[i].trim();
    const indx = genreTypes.indexOf(genre);
    if(indx == -1) {
      return helpers.message(`genres must be one of ${genreTypes}`);
    }
  }

  return value;
}

const videoLink = (value, helpers) => {

  const arr = value.split('/');
  const domain = arr[0];
  const embed = arr[1];
  const videoId = arr[2];

  if (domain != 'youtube.com' || embed != 'embed'){
      return helpers.message('Invalid video link');
  }

return value;

}


module.exports = {
  objectId,
  genres,
  videoLink,
};