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
    console.log(SelectPoke);

};
for (var i =0; i<SelectPoke.length ; i++){
    var newCard = $("<div>");
    var CardImage = $("<img>");
    var Cardbody = $("<div>");
    var CardTitle = $("<h5>");
    var CardText = $("<div>");
    newCard.addClass("PokeSelect Options col-3 card");
    CardImage.attr("src", Pokemons[SelectPoke[i]]["image"]).addClass("card-img-top");
    Cardbody.addClass("card-body");
    CardTitle.addClass("card-title").text(SelectPoke[i]);
    CardText.addClass("card-text").text("live: " + Pokemons[SelectPoke[i]]["hp"]);

    Cardbody.append(CardTitle, CardText);
    newCard.append(CardImage, Cardbody);

    $("#Select").append(newCard);
}
