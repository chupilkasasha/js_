const personalMovieDb = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privet: false,
  start: function () {
    personalMovieDb.count = +prompt('Сколько посмотрели фильмов?');
    while (personalMovieDb.count == '' || personalMovieDb.count == null || personalMovieDb.count == isNaN(personalMovieDb.count)) {
      personalMovieDb.count = +prompt('Сколько посмотрели фильмов?');
    }

  },
  rememberFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних фильмов?');
      const b = prompt('На сколько оцените его?');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDb.count[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },

  detecPersonalLevel: function () {
    if (personalMovieDb.count < 10) {
      console.log('просмотрено мало фильмов!');
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
      console.log('вы активный зритель фильмов!');
    } else if (personalMovieDb.count >= 30) {
      console.log('вы киноман любитель!');
    } else {
      console.log('произошла ошибка');
    }
  },

  showMyDb: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDb);
    }
  },
  writeYourGanres: function () {
    for (let i = 1; i <= 3; i++) {
      const gener = prompt(`ваш любимый жанр под номером ${i}`);
      personalMovieDb.genres[i - 1] = gener;
    }
  }
};