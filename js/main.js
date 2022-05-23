
//enable button to be clicked by pressing Enter key
document.getElementById('searchInput').addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById('search').click();
    }
})
//get input from user from api
document.getElementById('search').addEventListener('click', async function () {
    let search = document.getElementById('searchInput').value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    let data = await response.json();
    console.log(data);

// display data from api on page(pokedex)
    //display name
    document.getElementById('name').innerHTML = data.name;
    //display ID
    document.getElementById('id').innerHTML = data.id;
    // front and back sprites normal
    document.getElementById('frontSprite').src = data.sprites.front_default;
    document.getElementById('backSprite').src = data.sprites.back_default;
    //front and back sprites Shiny version
    document.getElementById('frontSpriteShiny').src = data.sprites.front_shiny;
    document.getElementById('backSpriteShiny').src = data.sprites.back_shiny;
    //front and back sprites for female
    document.getElementById('frontSpriteFemale').src = data.sprites.front_female;
    document.getElementById('backSpriteFemale').src = data.sprites.back_female;
    // front and back sprites shiny version female
    document.getElementById('frontSpriteShinyFemale').src = data.sprites.front_shiny_female;
    document.getElementById('backSpriteShinyFemale').src = data.sprites.back_shiny_female;
    //Ditto only has 1 move
    if (search === 132 || search === "ditto"){
        document.getElementById('type').innerHTML = data.types.map(type => type.type.name).join(", ");
        let movesArray = data.moves.map(move => move.move.name);
        console.log(movesArray)
        document.getElementById("moves").innerHTML = movesArray;
    }

    document.getElementById('type').innerHTML = data.types.map(type => type.type.name).join(", ");
    let movesArray = data.moves.map(move => move.move.name).slice(0,4);
    console.log(movesArray)
    document.getElementById("moves").innerHTML = movesArray
})



