// Obtenez une référence de l'élément d'entrée
let movieNameInput = document.getElementById("movie-name");

// Liste de chaînes de caractères possibles
const listMovie = ["Green Book", "The Devil Wears Prada", "The Prestige",  "Taken", "MR. & MRS. Smith", "300", "V For Vendetta", "Black Hawk Down", "Slumdog Millionaire", "Fury", "Memento", "No Country for Old Men", "Gladiator", "Avatar", "Dune", "Into the Wild", "Inception", "City Of God", "American Beauty", "Snatch", "In the Mood for Love", "Le Voyage de Chihiro", "Kill Bill", "The Cell", "Unbreakable", "Ocean's Eleven", "Vanilla Sky"];

// Générez un index aléatoire dans la plage de votre liste de films
let indexRandom = Math.floor(Math.random() * listMovie.length);

// Remplissez la valeur de l'élément d'entrée avec une chaîne de caractères aléatoire de la liste
movieNameInput.value = listMovie[indexRandom];