const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });

// genres types allowed
const GENRE_TYPE_EDUCATION = 'Education';
const GENRE_TYPE_SPORTS = 'Sports';
const GENRE_TYPE_MOVIES = 'Movies';
const GENRE_TYPE_COMEDY = 'Comedy';
const GENRE_TYPE_LIFESTYLE = 'Lifestyle';

// ratings types allowed
const RATINGS_ANYONE = 'Anyone';
const RATINGS_7_PLUS = '7+';
const RATINGS_12_PLUS = '12+';
const RATINGS_16_PLUS = '16+';
const RATINGS_18_PLUS = '18+';
const RATINGS_ALL = 'All';

// votes default values
const DEFAULT_VOTES = {
    upVotes: 0,
    downVotes: 0,
}

const DEFAULT_VIEW_COUNT = 0;

module.exports = {

  genre_education: GENRE_TYPE_EDUCATION,
  genre_sports: GENRE_TYPE_SPORTS,
  genre_movies: GENRE_TYPE_MOVIES,
  genre_comedy: GENRE_TYPE_COMEDY,
  genre_lifestyle: GENRE_TYPE_LIFESTYLE,

  ratings: [RATINGS_ANYONE, RATINGS_7_PLUS, RATINGS_12_PLUS, RATINGS_16_PLUS, RATINGS_18_PLUS, RATINGS_ALL],
  ratings_anyone: RATINGS_ANYONE,
  ratings_7_plus: RATINGS_7_PLUS,
  ratings_12_plus: RATINGS_12_PLUS,
  ratings_16_plus: RATINGS_16_PLUS,
  ratings_18_plus: RATINGS_18_PLUS,
  ratings_all: RATINGS_ALL,

  default_votes: DEFAULT_VOTES,
  default_view_count: DEFAULT_VIEW_COUNT,


  port: process.env.XFLIX_PORT,
  mongoose: {
    url: process.env.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  },
};
