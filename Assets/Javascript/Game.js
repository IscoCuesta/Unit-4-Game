$(".SecondPart").hide();

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



for (var i = 0; i<4; i++){
    RndPoke = APokemons[Math.floor(Math.random()*APokemons.length)];
    for (var j = 0; j<=SelectPoke.length; j++){
        if (RndPoke !== SelectPoke[j]){
            isdiferent = true;
        }
        else {
            isdiferent = false;
            break;
        };
    };
    if (isdiferent){
        SelectPoke.push(RndPoke)
    }
    else {
        i--
    };
};
for (var i =0; i<SelectPoke.length ; i++){
    var newCard = $("<div>");
    var CardImage = $("<img>");
    var Cardbody = $("<div>");
    var CardTitle = $("<h5>");
    var CardText = $("<div>");
    var CardText2 = $("<div>");
    newCard.addClass("PokeSelect Options col-3 card text-center").attr("data-Poke-name", Pokemons[SelectPoke[i]]["name"]);
    CardImage.attr("src", Pokemons[SelectPoke[i]]["image"]).addClass("card-img-top");
    Cardbody.addClass("card-body");
    CardTitle.addClass("card-title card-header").text(SelectPoke[i]);
    CardText.addClass("card-text").text("live: " + Pokemons[SelectPoke[i]]["hp"]);
    CardText2.addClass("card-text").text("Strength: " + Pokemons[SelectPoke[i]]["strength"]);
    
    Cardbody.append(CardTitle, CardText, CardText2);
    newCard.append(CardImage, Cardbody);

    $("#Select").append(newCard);
}

$(".PokeSelect").on("click", function(){
    if(count===0){
        UserPokemons["0"] = Pokemons[$(this).attr("data-Poke-name")];
        $(this).addClass("bg-success");
        count++;
    }
    else{
        UserPokemons["1"] = Pokemons[$(this).attr("data-Poke-name")];
        $("#Select").empty();

        for(var i = 0; i<2; i++){    
            RndPoke = APokemons[Math.floor(Math.random()*APokemons.length)];
            CompPokemons[i] = Pokemons[RndPoke];
        };

        DisplayCard(UserPokemons, ".ActivePoke");
        DisplayCard(CompPokemons, ".CompPoke");

        $("#Poketext0").text("life : " + UserPokemons["0"]["hp"]);
        $("#Poketext1").text("life : " + UserPokemons["1"]["hp"]);
        $("#PoketextComp0").text("life : " + CompPokemons["0"]["hp"]);
        $("#PoketextComp1").text("life : " + CompPokemons["1"]["hp"]);
        


        $(".SecondPart").show();
    };
});

$(".ActivePoke0").on("click", function(){
    if(UserPokemons[0]["active"] === false && UserPokemons[1]["active"] === false){
        $(this).addClass("bg-success");
        UserPokemons[0]["active"] = true;
        PokeAtack = 0;
    }
    else if(UserPokemons[0]["active"] === true){
        $(this).removeClass("bg-success");
        UserPokemons[$(this).attr("data-poke")]["active"] = false;
        PokeAtack = "";
    }
    else{
        $(".ActivePoke1").removeClass("bg-success");
        $(this).addClass("bg-success");
        UserPokemons[$(this).attr("data-poke")]["active"] = true;
        UserPokemons[$(".ActivePoke1").attr("data-poke")]["active"] = false;
        PokeAtack = 0;
    };
});
$(".ActivePoke1").on("click", function(){
    if(UserPokemons[1]["active"] === false && UserPokemons[0]["active"] === false){
        $(this).addClass("bg-success");
        UserPokemons[1]["active"] = true;
        PokeAtack = 1;
    }
    else if(UserPokemons[1]["active"] === true){
        $(this).removeClass("bg-success");
        UserPokemons[$(this).attr("data-poke")]["active"] = false;
        PokeAtack = "";
    }
    else{
        $(".ActivePoke0").removeClass("bg-success");
        $(this).addClass("bg-success");
        UserPokemons[$(this).attr("data-poke")]["active"] = true;
        UserPokemons[$(".ActivePoke0").attr("data-poke")]["active"] = false;
        PokeAtack = 1;
    };
});
$(".CompPoke0").on("click", function(){
    if(CompPokemons[0]["active"] === false && CompPokemons[1]["active"] === false){
        $(this).addClass("bg-danger");
        CompPokemons[0]["active"] = true;
        PokeDefense = 0;
    }
    else if(CompPokemons[0]["active"] === true){
        $(this).removeClass("bg-danger");
        CompPokemons[0]["active"] = false;
        PokeDefense = "";
    }
    else{
        $(".CompPoke1").removeClass("bg-danger");
        $(this).addClass("bg-danger");
        CompPokemons[0]["active"] = true;
        CompPokemons[1]["active"] = false;
        PokeDefense = 0;
    };
});
$(".CompPoke1").on("click", function(){
    if(CompPokemons[1]["active"] === false && CompPokemons[0]["active"] === false){
        $(this).addClass("bg-danger");
        CompPokemons[1]["active"] = true;
        PokeDefense = 1;
    }
    else if(CompPokemons[1]["active"] === true){
        $(this).removeClass("bg-danger");
        CompPokemons[1]["active"] = false;
        PokeDefense = "";
    }
    else{
        $(".CompPoke0").removeClass("bg-danger");
        $(this).addClass("bg-danger");
        CompPokemons[1]["active"] = true;
        CompPokemons[0]["active"] = false;
        PokeDefense = 0;
    };
});

$("#Fight-btn").on("click", function(){
    if((PokeAtack === 0 || PokeAtack === 1)&&(PokeDefense === 0 || PokeDefense === 1)){
        compare(UserPokemons[PokeAtack]["type"], CompPokemons[PokeDefense]["type"]);
        var Attack = Math.floor(UserPokemons[PokeAtack]["strenght"] * multiplier);
        var Deffense = Math.floor(CompPokemons[PokeDefense]["strenght"] / multiplier);
        console.log("User Pokemon=" + CompPokemons[0]["strenght"], "multiplier = " + multiplier);
        UserPokemons[PokeAtack]["hp"] = UserPokemons[PokeAtack]["hp"];
        CompPokemons[PokeDefense]["hp"] = CompPokemons[PokeDefense]["hp"];
        
        $("#Text").text(TextMult + UserPokemons[PokeAtack]["name"] + "Attack was=" + Attack);
        
        if(UserPokemons[PokeAtack]["hp"]<=0){
            $(".ActivePoke"+PokeAtack).empty();
            $("#Text").text(UserPokemons[PokeAtack]["name"] + " fainted! the atack was very effective!");
        };
        if(CompPokemons[PokeDefense]["hp"]<=0){
            $(".CompPoke"+PokeDefense).empty();
            $("#Text").text(CompPokemons[PokeDefense]["name"] + " fainted! the atack was very effective!");
        };

        UserPokemons[PokeAtack]["active"] = false;
        CompPokemons[PokeDefense]["active"] = false;
        $(".CompPoke0").removeClass("bg-danger");
        $(".CompPoke1").removeClass("bg-danger");
        $(".ActivePoke0").removeClass("bg-success");
        $(".ActivePoke1").removeClass("bg-success");

        
        $("#Poketext0").text("hp = " + UserPokemons["0"]["hp"]);
        $("#Poketext1").text("hp = " + UserPokemons["1"]["hp"]);
        $("#PoketextComp0").text("hp = " + CompPokemons["0"]["hp"]);
        $("#PoketextComp1").text("hp = " + CompPokemons["1"]["hp"]);
    }
})




