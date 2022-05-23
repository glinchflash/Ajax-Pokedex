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
    displayData();

// display data from api on page(pokedex)

    function displayData() {
        //display name
        document.getElementById('name').innerHTML = data.name;
        //display ID
        document.getElementById('id').innerHTML = data.id;

        // change sprites accordingly, don't change images when sprite unavailable

        // front male
        if (data.sprites.front_default != null) {
            document.getElementById('frontSprite').src = data.sprites.front_default;
        }
        //back male
        if (data.sprites.back_default != null) {
            document.getElementById('backSprite').src = data.sprites.back_default;
        }
        //front male shiny
        if (data.sprites.front_shiny != null) {
            document.getElementById('frontSpriteShiny').src = data.sprites.front_shiny;
        }
        //back male shiny
        if (data.sprites.back_shiny != null) {
            document.getElementById('backSpriteShiny').src = data.sprites.back_shiny;
        }
        //front female
        if (data.sprites.front_female != null) {
            document.getElementById('frontSpriteFemale').src = data.sprites.front_female;
        }
        //back female
        if (data.sprites.back_female != null) {
            document.getElementById('backSpriteFemale').src = data.sprites.back_female;
        }
        //front female shiny
        if (data.sprites.front_shiny_female != null) {
            document.getElementById('frontSpriteShinyFemale').src = data.sprites.front_shiny_female;
        }
        //back female shiny
        if (data.sprites.back_shiny_female != null) {
            document.getElementById('backSpriteShinyFemale').src = data.sprites.back_shiny_female;
        }


        //Ditto only has 1 move
        if (search === 132 || search === "ditto") {
            document.getElementById('type').innerHTML = data.types.map(type => type.type.name).join(", ");
            let movesArray = data.moves.map(move => move.move.name);
            console.log(movesArray)
            document.getElementById("moves").innerHTML = movesArray;
        }
        // display moves
        document.getElementById('type').innerHTML = data.types.map(type => type.type.name).join(", ");
        let movesArray = data.moves.map(move => move.move.name).slice(0, 4);
        console.log(movesArray)
        document.getElementById("moves").innerHTML = movesArray
    }
});
document.getElementById('search').addEventListener('click', async function () {
    let search = document.getElementById('searchInput').value
    const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    let evo = await response2.json();
    console.log(evo);
    //displayEvolution();
    //display evolution line
  /*  function displayEvolution() {
        //call name of next evolution
        document.getElementById('next-evo').innerHTML = evo.chain.evolves_to[0].species.name;
        //functions to get images of next and previous evolution
        //function for next evolution
        getEvoLine()
        async function getEvoLine (){
            const nextEvolution =  await fetch(`https://pokeapi.co/api/v2/pokemon/${evo.chain.evolves_to[0].species.name}`);
            let nextEvo = await nextEvolution.json();
            //onst preEvolution
            //
            document.getElementById('evolution').src = nextEvo.sprites.front_default;
        }


    }*/
})




