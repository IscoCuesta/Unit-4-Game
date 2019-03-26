var Pokemons = {
    Cubone: {
        name: "Cubone",
        image: "Assets/images/Cubone.png",
        hp: 100,
        strength: 10,
        type: "earth",
        active: false,
    },
    Squirtle: {
        name: "Squirtle",
        image: "Assets/images/Squirtle.png",
        hp: 80,
        strength: 12,
        type: "water",
        active: false,
    },
    Charizard: {
        name: "Charizard",
        image: "Assets/images/Charizard.png",
        hp: 70,
        strength: 15,
        type: "fire",
        active: false,
    },
    Bulbasaur: {
        name: "Bulbasaur",
        image: "Assets/images/Bulbasaur.png",
        hp: 108,
        strength: 10,
        type: "plant",
        active: false,
    },
    Beedrill: {
        name: "Beedrill",
        image: "Assets/images/Beedrill.png",
        hp: 100,
        strength: 12,
        type: "plant",
        active: false,
    },
    Sandslash: {
        name: "Sandslash",
        image: "Assets/images/Sandslash.png",
        hp: 110,
        strength: 9,
        type: "earth",
        active: false,
    },
    Vulpix: {
        name: "Vulpix",
        image: "Assets/images/Vulpix.png",
        hp: 90,
        strength: 15,
        type: "fire",
        active: false,
    },
    Oddish: {
        name: "Oddish",
        image: "Assets/images/Oddish.png",
        hp: 115,
        strength: 7,
        type: "plant",
        active: false,
    },
    Psyduck: {
        name: "Psyduck",
        image: "Assets/images/Psyduck.png",
        hp: 70,
        strength: 18,
        type: "water",
        active: false,
    },
    Growlithe: {
        name: "Growlithe",
        image: "Assets/images/Growlithe.png",
        hp: 75,
        strength: 12,
        type: "fire",
        active: false,
    },
    Tentacool: {
        name: "Tentacool",
        image: "Assets/images/Tentacool.png",
        hp: 60,
        strength: 20,
        type: "water",
        active: false,
    },
    Golem: {
        name: "Golem",
        image: "Assets/images/Golem.png",
        hp: 85,
        strength: 16,
        type: "earth",
        active: false,
    },
    Gyarados: {
        name: "Gyarados",
        image: "Assets/images/Gyarados.png",
        hp: 60,
        strength: 22,
        type: "water",
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

var APokemons = ["Cubone","Squirtle","Charizard","Bulbasaur", "Beedrill", "Gyarados",
"Sandslash", "Vulpix", "Oddish", "Psyduck", "Growlithe", "Tentacool", "Golem",  ];
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
            TextMult = "The attack had almost no effect!"
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
            TextMult = "The attack had almost no effect!"
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
            TextMult = "The attack had almost no effect!"
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
            TextMult = "The attack had almost no effect!"
        }
        else {
            multiplier = 1;
            TextMult = "The attack was not very effective!"
        };
    };
}
