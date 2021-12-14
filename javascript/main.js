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

const enJSON    = JSON.stringify(animesList);



const anime01 = $("#anime1");
const anime02 = $("#anime2");
const anime03 = $("#anime3");
const anime04 = $("#anime4");
const anime05 = $("#anime5");
const anime06 = $("#anime6");
const lista = $("#listaDeAnimes");



let animeVoted = [];
var num = 5; 
if (num > 0 ){
  $(".clase").click (function (event) {
  event.preventDefault();
    $(this,"div").append(function(){ alert ("Se ha registrado su voto muchas gracias")
    } ) ;
  });
  $(":input").click(function saveToStorage(AnimeVoted, animeName) {
   
    localStorage.setItem("AnimeVoted",  $(this).val());

    animeVoted.push( $(this).val())
  
  });
}
$(".info").on('click', (e) =>{
  $.getJSON ("animes.json", (respuesta, status)=>{
    if(status ==="success"){
      respuesta.forEach((anime)=>{
       $(".container").append(`${ anime.nombre}-${anime.autor}-${ anime.año}-${ anime.genero}-${ anime.temporadas}-${ anime.emision}<br>`);
    });
      }
    });
  });