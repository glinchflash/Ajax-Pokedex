//enable button to be clicked by pressing Enter key
document.getElementById('searchInput').addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById('search').click();
    }
});

//get input from user from api
document.getElementById('search').addEventListener('click', async function () {

    let search = document.getElementById('searchInput').value;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    let data = await response.json();
    console.log(data);
    //get evolution line
    let nextEvoUrlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`);
    let dataNextEvo = await nextEvoUrlFetch.json();
    console.log(dataNextEvo);
    let urlChainfetch = dataNextEvo.evolution_chain.url;
    let nextEvolutionFetch = await fetch(urlChainfetch);
    let dataNewEvo = await nextEvolutionFetch.json();
    console.log(dataNewEvo);

    //evolution line
    // get next evo when there is no pre evolved form
    if (dataNextEvo.evolves_from_species === null) {
        document.getElementById('pre-evolution').src = "../images/pokeball.png";
        document.getElementById('pre-evo').innerHTML = `None ${data.name} is the base form`;
        /* let evoName = dataNewEvo.chain.evolves_to[0].species.name;
         if (data.name === evoName ){
             let evoName2 = dataNewEvo.chain.evolves_to[0].evolves_to[0].species.name;
             console.log(evoName2);
             // document.getElementById('next-evo').innerHTML = evoName;
             const evoFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${evoName2}`);
             let dataEvo = await evoFetch.json();
             console.log(dataEvo)
             document.getElementById('next-evolution').src = dataEvo.sprites.other.home.front_default;
         }else {
             document.getElementById('next-evo').innerHTML = evoName;
             const evoFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${evoName}`);
             let dataEvo = await evoFetch.json();
             console.log(dataEvo)
             document.getElementById('next-evolution').src = dataEvo.sprites.other.home.front_default;
         }*/
    }
    // get both evolutions (pre and next)
    else {
        //pre evo
        let preEvoName = dataNextEvo.evolves_from_species.name;
        document.getElementById('pre-evo').innerHTML = preEvoName;
        let preEvoFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${preEvoName}`);
        let dataPreEvo = await preEvoFetch.json();
        console.log(dataPreEvo)
        document.getElementById('pre-evolution').src = dataPreEvo.sprites.other.home.front_default;

        //next evo Extra feature
/*
        let evoName = dataNewEvo.chain.evolves_to[0].species.name;
        document.getElementById('next-evo').innerHTML = evoName;
        const evoFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${evoName}`);
        let dataEvo = await evoFetch.json();
        console.log(dataEvo)
*/
    }

// display data from api on page(pokedex)

    //display name
    document.getElementById('name').innerHTML = data.name;
    //display ID
    document.getElementById('id').innerHTML = data.id;

    // change sprites accordingly, don't change images when sprite unavailable

    // front male
    if (data.sprites.front_default != null) {
        document.getElementById('frontSprite').src = data.sprites.front_default;
    }else{
        document.getElementById('frontSprite').src = "../images/pokeball.png";
    }
    //back male
    if (data.sprites.back_default != null) {
        document.getElementById('backSprite').src = data.sprites.back_default;
    }else{
        document.getElementById('backSprite').src = "../images/pokeball.png";
    }
    //front male shiny
    if (data.sprites.front_shiny != null) {
        document.getElementById('frontSpriteShiny').src = data.sprites.front_shiny;
    }else{
        document.getElementById('frontSpriteShiny').src = "../images/pokeball.png";
    }
    //back male shiny
    if (data.sprites.back_shiny != null) {
        document.getElementById('backSpriteShiny').src = data.sprites.back_shiny;
    }else{
        document.getElementById('backSpriteShiny').src = "../images/pokeball.png";
    }
    //front female
    if (data.sprites.front_female != null) {
        document.getElementById('frontSpriteFemale').src = data.sprites.front_female;
    }else{
        document.getElementById('frontSpriteFemale').src = "../images/pokeball.png";
    }
    //back female
    if (data.sprites.back_female != null) {
        document.getElementById('backSpriteFemale').src = data.sprites.back_female;
    }else{
        document.getElementById('backSpriteFemale').src = "../images/pokeball.png";
    }
    //front female shiny
    if (data.sprites.front_shiny_female != null) {
        document.getElementById('frontSpriteShinyFemale').src = data.sprites.front_shiny_female;
    }else{
        document.getElementById('frontSpriteShinyFemale').src = "../images/pokeball.png";
    }
    //back female shiny
    if (data.sprites.back_shiny_female != null) {
        document.getElementById('backSpriteShinyFemale').src = data.sprites.back_shiny_female;
    }else{
        document.getElementById('backSpriteShinyFemale').src = "../images/pokeball.png";
    }



    // display moves
    document.getElementById('type').innerHTML = data.types.map(type => type.type.name).join(", ");
    document.getElementById("moves").innerHTML = data.moves.map(move => move.move.name).slice(0, 4).join(", ");
    //Ditto only has 1 move
    if (search === 132 || search === "ditto") {
        document.getElementById("moves").innerHTML = data.moves.move.move.name;
    }

    //change background depending on type


});







