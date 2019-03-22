var Pokemons = {
    Cubone: {
        name: "Cubone",
        image: "./assets/images/Cubone.png",
        hp: 100,
        strength: 10,
        type: "earth",
        active: false,
    },
    Squirtle: {
        name: "Squirtle",
        image: "./assets/images/Squirtle.png",
        hp: 80,
        strength: 12,
        type: "water",
        active: false,
    },
    Charizard: {
        name: "Charizard",
        image: "./assets/images/Charizard.png",
        hp: 120,
        strength: 15,
        type: "fire",
        active: false,
    },
    Bulbasaur: {
        name: "Bulbasaur",
        image: "./assets/images/Bulbasaur.png",
        hp: 108,
        strength: 10,
        type: "plant",
        active: false,
    },
};
var APokemons = ["Cubone","Squirtle","Charizard","Bulbasaur",];
var RndPoke = APokemons[Math.floor(Math.random()*APokemons.length)];
var SelectPoke = [];
var isdiferent = false;