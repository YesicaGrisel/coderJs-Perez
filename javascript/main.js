class Anime {
  constructor(nombre, genero, autor, año, temporadas, emision) {
    this.nombre = nombre;
    this.genero = genero;
    this.autor = autor;
    this.año = año;
    this.temporadas = temporadas;
    this.emision = emision;
  }
}
const anime1 = new Anime(
  "Naruto",
  "Shonen",
  "Masashi Kishimoto",
  1999,
  9,
  "Finalizado"
);

const anime2 = new Anime(
  "Damon Slayer",
  "shonen",
  "Koyoharu Gotōgek",
  2016,
  2,
  "En emisión"
);
const anime3 = new Anime(
  "Sakura Card Captor",
  "shojo",
  "mangaka CLAMP",
  1996,
  3,
  "finalizado"
);
const anime4 = new Anime(
  "Sailor moon",
  "shojo",
  "	Naoko Takeuchi",
  1991,
  5,
  "finalizado"
);
const anime5 = new Anime(
  "Black Clover",
  "shonen",
  " Yūki Tabata",
  2015,
  3,
  "En emisión"
);
const anime6 = new Anime(
  "Erased",
  "	ciencia ficción",
  "	Kei Sanbe",
  2012,
  1,
  " Finalizado"
);

let animesList = [];
animesList.push(anime1, anime2, anime3, anime4, anime5, anime6);

const anime01 = $("#anime1");
const anime02 = $("#anime2");
const anime03 = $("#anime3");
const anime04 = $("#anime4");
const anime05 = $("#anime5");
const anime06 = $("#anime6");
const lista = $("#listaDeAnimes");

let animeVoted = [];
anime01.click(function (event) {
event.preventDefault();
  $(".anime1").append(`<div>Se ha registrado su voto</div>`);
});
anime01.click(function saveToStorage(AnimeVoted, animeName) {
 
  localStorage.setItem("AnimeVoted", anime01.val());
  animeVoted.push(anime01.val())


});
anime02.click(function (event) {
  event.preventDefault();
  $(".anime2").append(`<div>Se ha registrado su voto</div>`);
});
anime02.click(function saveToStorage(AnimeVoted, animeName) {
 
  localStorage.setItem("AnimeVoted", anime02.val());
  animeVoted.push(anime02.val())


});

anime03.click(function (event) {
  event.preventDefault();
  $(".anime3").append(`<div>Se ha registrado su voto</div>`);
});
anime03.click(function saveToStorage(AnimeVoted, animeName) {
 
  localStorage.setItem("AnimeVoted", anime03.val());
  animeVoted.push(anime03.val())


});
anime04.click(function (event) {
  event.preventDefault();
  $(".anime4").append(`<div>Se ha registrado su voto</div>`);
});
anime04.click(function saveToStorage(AnimeVoted, animeName) {
 
  localStorage.setItem("AnimeVoted", anime04.val());
  animeVoted.push(anime04.val())

});


anime05.click(function (event) {
event.preventDefault();
  $(".anime5").append(`<div>Se ha registrado su voto</div>`);
});
anime05.click(function saveToStorage(AnimeVoted, animeName) {
 
  localStorage.setItem("AnimeVoted", anime05.val());
  animeVoted.push(anime05.val())


});
anime06.click(function (event) {
  event.preventDefault();
  $(".anime6").append(`<div>Se ha registrado su voto</div>`);
});
anime06.click(function saveToStorage(AnimeVoted, animeName) {
 
  localStorage.setItem("AnimeVoted", anime06.val());
  animeVoted.push(anime06.val())


});