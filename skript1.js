let numberOffFilms;
function start(){
  numberOffFilms = +prompt('Сколько посмотрели фильмов?');

  while(numberOffFilms == '' || numberOffFilms == null || numberOffFilms == isNaN(numberOffFilms)){
    numberOffFilms = +prompt('Сколько посмотрели фильмов?');
  }

}
start();
const personalMovieDb = {
  count: numberOffFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false
}

const с = prompt('Один из последних фильмов?');
const d = prompt('На сколько оцените его?');

function rememberFilms(){
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
}
rememberFilms();

function detecPersonalLevel(){
  if (personalMovieDb.count < 10) {
    console.log('просмотрено мало фильмов!');
  } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log('вы активный зритель фильмов!');
  } else if (personalMovieDb.count >= 30) {
    console.log('вы киноман любитель!');
  } else {
    console.log('произошла ошибка');
  }
}
detecPersonalLevel();


function showMyDb(hidden){
  if(!hidden){
    console.log(personalMovieDb);
  }
}

showMyDb(personalMovieDb.privet);

function writeYourGanres(){
  for(let i = 1; i <= 3; i++){
    const gener = prompt(`ваш любимый жанр под номером ${i}`);
    personalMovieDb.genres[i-1] = gener;
  }
}
writeYourGanres();












