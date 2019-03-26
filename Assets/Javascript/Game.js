
function start(){
    $(".SecondPart").hide();

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
    };


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
};
start();

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
        var Attack = Math.floor(UserPokemons[PokeAtack]["strength"] * multiplier);
        var Deffense = Math.floor(CompPokemons[PokeDefense]["strength"] / multiplier);

        UserPokemons[PokeAtack]["hp"] -= Deffense;
        CompPokemons[PokeDefense]["hp"] -= Attack;
        
        $("#Text").text(TextMult + " " + UserPokemons[PokeAtack]["name"] + "Attack was= " + Attack);
        $("#Text2").text("The enemy " + CompPokemons[PokeDefense]["name"] + "Responded with an attack of " + Deffense);
        
        $("#Poketext0").text("hp = " + UserPokemons["0"]["hp"]);
        $("#Poketext1").text("hp = " + UserPokemons["1"]["hp"]);
        $("#PoketextComp0").text("hp = " + CompPokemons["0"]["hp"]);
        $("#PoketextComp1").text("hp = " + CompPokemons["1"]["hp"]);

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
        PokeAtack = "";
        PokeDefense = "";
        $(".CompPoke0").removeClass("bg-danger");
        $(".CompPoke1").removeClass("bg-danger");
        $(".ActivePoke0").removeClass("bg-success");
        $(".ActivePoke1").removeClass("bg-success");

        if(UserPokemons[0]["hp"]<=0 && UserPokemons[1]["hp"]<=0){
            alert("you lost! your pokemons fainted.");
            if(confirm("Want to try again?")){
                SelectPoke = [];
                count = 0;
                UserPokemons = {
                    0: {
                    },
                    1: {
                    },
                };
                CompPokemons = {
                    0: {
                    },
                    1: {
                    },
                };
                start();
            };
        };
        if(CompPokemons[0]["hp"]<=0 && CompPokemons[1]["hp"]<=0){
            alert("you Won! All enemy Pokemons fainted.");
            if(confirm("Want to try again?")){
                SelectPoke = [];
                count = 0;
                UserPokemons = {
                    0: {
                    },
                    1: {
                    },
                };
                CompPokemons = {
                    0: {
                    },
                    1: {
                    },
                };
                start();
            };
        };
    }
    else{
        $("#Text").text("please choose a fighter.")
        $("#Text2").text("")
    };
});




