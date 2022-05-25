//enable button to be clicked by pressing Enter key
document.getElementById('searchInput').addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById('search').click();
    }
});

//get input from user from api
document.getElementById('search').addEventListener('click', async function () {
    //fetch 1: get data on pokemon (spirtes included)
    let search = document.getElementById('searchInput').value;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    let data = await response.json();
    console.log(data);
    //fetch 2: get species data
    let nextEvoUrlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`);
    let dataNextEvo = await nextEvoUrlFetch.json();
    console.log(dataNextEvo);
    //fetch 3: get evolution chain
    let urlChainfetch = dataNextEvo.evolution_chain.url;
    let evoChain = await fetch(urlChainfetch);
    let dataEvoChain = await evoChain.json();
    console.log(dataEvoChain);

// display data from api on page(pokedex)

    //display name
    document.getElementById('name').innerHTML = data.name;
    //display ID
    document.getElementById('id').innerHTML = data.id;

    // change sprites accordingly, don't change images when sprite unavailable

    // front male
    if (data.sprites.front_default != null) {
        document.getElementById('frontSprite').src = data.sprites.front_default;
    } else {
        document.getElementById('frontSprite').src = "../images/pokeball.png";
    }
    //back male
    if (data.sprites.back_default != null) {
        document.getElementById('backSprite').src = data.sprites.back_default;
    } else {
        document.getElementById('backSprite').src = "../images/pokeball.png";
    }
    //front male shiny
    if (data.sprites.front_shiny != null) {
        document.getElementById('frontSpriteShiny').src = data.sprites.front_shiny;
    } else {
        document.getElementById('frontSpriteShiny').src = "../images/pokeball.png";
    }
    //back male shiny
    if (data.sprites.back_shiny != null) {
        document.getElementById('backSpriteShiny').src = data.sprites.back_shiny;
    } else {
        document.getElementById('backSpriteShiny').src = "../images/pokeball.png";
    }
    //front female
    if (data.sprites.front_female != null) {
        document.getElementById('frontSpriteFemale').src = data.sprites.front_female;
    } else {
        document.getElementById('frontSpriteFemale').src = "../images/pokeball.png";
    }
    //back female
    if (data.sprites.back_female != null) {
        document.getElementById('backSpriteFemale').src = data.sprites.back_female;
    } else {
        document.getElementById('backSpriteFemale').src = "../images/pokeball.png";
    }
    //front female shiny
    if (data.sprites.front_shiny_female != null) {
        document.getElementById('frontSpriteShinyFemale').src = data.sprites.front_shiny_female;
    } else {
        document.getElementById('frontSpriteShinyFemale').src = "../images/pokeball.png";
    }
    //back female shiny
    if (data.sprites.back_shiny_female != null) {
        document.getElementById('backSpriteShinyFemale').src = data.sprites.back_shiny_female;
    } else {
        document.getElementById('backSpriteShinyFemale').src = "../images/pokeball.png";
    }


    // display moves
    document.getElementById('type').innerHTML = data.types.map(type => type.type.name).join(", ");
    document.getElementById("moves").innerHTML = data.moves.map(move => move.move.name).slice(0, 4).join(", ");
    //Ditto only has 1 move
    if (search === 132 || search === "ditto") {
        document.getElementById("moves").innerHTML = data.moves.move.move.name;
    }


    //fetch evo line data out of evolution chain
    let baseEvo = dataEvoChain.chain.species.name;
    console.log(baseEvo);
    let middleEvo = dataEvoChain.chain.evolves_to.length;
    console.log(middleEvo);
    //display base form name
    document.getElementById('base').innerHTML = baseEvo;

    //fetch sprites

    let spriteBaseFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${baseEvo}`);
    let spriteBase = await spriteBaseFetch.json();
    console.log(spriteBase);
    //show baseForm sprite
    document.getElementById('baseForm').src = spriteBase.sprites.other.home.front_default;

    //if statement to get all sprites and have placeholders when not all forms are existing
    if (middleEvo) {
        //if there is a middle form, check to see if there is also a final form
        let finalEvo = dataEvoChain.chain.evolves_to[0].evolves_to.length;
        console.log(finalEvo);
        //display middle form name
        document.getElementById('middleEvo').innerHTML =dataEvoChain.chain.evolves_to[0].species.name;
        //fetch middle sprite
        let spriteMiddleFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${dataEvoChain.chain.evolves_to[0].species.name}`);
        let spriteMiddle = await spriteMiddleFetch.json();
        console.log(spriteMiddle);
        //display middle form sprite
        document.getElementById('middleForm').src = spriteMiddle.sprites.other.home.front_default;
        //if there is a final form
        if (finalEvo) {
            //display final form name
            document.getElementById('finalEvo').innerHTML = dataEvoChain.chain.evolves_to[0].evolves_to[0].species.name;
            //fetch final form sprite
            let spriteFinalFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${dataEvoChain.chain.evolves_to[0].evolves_to[0].species.name}`);
            let spriteFinal = await spriteFinalFetch.json();
            console.log(spriteFinal);
            //display final form sprite
            document.getElementById('finalForm').src = spriteFinal.sprites.other.home.front_default;
        }
        //if no final form, display placeholder image and empty text (name)
        else if (finalEvo === 0){
            document.getElementById('finalEvo').innerHTML = "";
            document.getElementById('finalForm').src = "../images/pokeball.png"
        }
    }
    //if no middle form display placeholder image and empty text(name)
    else {
        document.getElementById('middleEvo').innerHTML = "";
        document.getElementById('middleForm').src = "../images/pokeball.png"

    }

    //change background depending on type


});







