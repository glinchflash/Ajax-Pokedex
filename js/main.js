//variable list
const promises = [];
let displayPoke = pokemon => {}
//getting api
for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
}
Promise.all(promises).then(results => {
    console.log(results);
    // gettind data from api
    const pokemon = results.map(data => ({
        name: data.name,
        id: data.id,
        frontImage: data.sprites["front_default"],
        frontImageShiny: data.sprites["front_shiny"],
        backImage: data.sprites["back_default"],
        backImageShiny: data.sprites["back_shiny"],
        type: data.types.map(type => type.type.name).join(", "),
        moves:data.moves,
    }));
    console.log(pokemon);
    document.getElementById('name').innerHTML = pokemon[0].name;
    document.getElementById('frontSprite').src = pokemon[0].frontImage;
    document.getElementById('backSprite').src = pokemon[0].backImage;
    document.getElementById('frontSpriteShiny').src = pokemon[0].frontImageShiny;
    document.getElementById('backSpriteShiny').src = pokemon[0].backImageShiny;
    document.getElementById('type').innerHTML = pokemon[0].type;

});


