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
var UserPokemons = {
    0: {
    },
    1: {
    },
};
var CompPokemons = {
    0: {
    },
    1: {
    },
};

var APokemons = ["Cubone","Squirtle","Charizard","Bulbasaur"];
var RndPoke = "";
var SelectPoke = [];
var isdiferent = false;
var count = 0;
var multiplier = 0;
var TextMult = "";
var PokeAtack = "";
var PokeDefense = "";


function DisplayCard(Arr, append) {
    for (var i=0; i<2 ; i++){
        var newCard = $("<div>");
        var CardImage = $("<img>");
        var Cardbody = $("<div>");
        var CardTitle = $("<h5>");
        var CardText2 = $("<div>");
        CardImage.attr("src", Arr[i]["image"]).addClass("card-img-top");
        Cardbody.addClass("card-body");
        CardTitle.addClass("card-title card-header").text(Arr[i]["name"]);
        CardText2.addClass("card-text").text("Strength: " + Arr[i]["strength"]);
    
        Cardbody.append(CardTitle, CardText2);
        newCard.append(CardImage, Cardbody);
    
        $(append+i).append(newCard);
    };
};

function compare (Atack, Deffense){
    if(Atack === "earth"){
        if (Deffense === "plant" || Deffense === "fire"){
            multiplier = 2;
            TextMult = "The attack was super effective!"
        }
        else if(Deffense === "water"){
            multiplier = 0.6;
            TextMult = "The attack had no effect!"
        }
        else {
            multiplier = 1;
            TextMult = "The attack was not very effective!"
        };
    };
    if(Atack === "water"){
        if (Deffense === "fire"){
            multiplier = 3;
            TextMult = "The attack was super effective!"
        }
        else if(Deffense === "plant"){
            multiplier = 0.3;
            TextMult = "The attack had no effect!"
        }
        else {
            multiplier = 1;
            TextMult = "The attack was not very effective!"
        };
    };
    if(Atack === "fire"){
        if (Deffense === "plant"){
            multiplier = 2;
            TextMult = "The attack was super effective!"
        }
        else if(Deffense === "water" || Deffense === "tierra"){
            multiplier = 0.7;
            TextMult = "The attack had no effect!"
        }
        else {
            multiplier = 1;
            TextMult = "The attack was not very effective!"
        };
    };
    if(Atack === "plant"){
        if (Deffense === "water"){
            multiplier = 3;
            TextMult = "The attack was super effective!"
        }
        else if(Deffense === "fire" || Deffense === "earth"){
            multiplier = 0.5;
            TextMult = "The attack had no effect!"
        }
        else {
            multiplier = 1;
            TextMult = "The attack was not very effective!"
        };
    };
}
