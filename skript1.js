const numberOffFilms = +prompt('Сколько посмотрели фильмов?');

const personalMovieDb = {
  count: numberOffFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false
}

const a = prompt('Один из последних фильмов?');
const b = prompt('На сколько оцените его?');
const с = prompt('Один из последних фильмов?');
const d = prompt('На сколько оцените его?');

personalMovieDb.count[a] = b;
personalMovieDb.count[c] = d;

