
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


    document.getElementById('name').innerHTML = data.name;
    document.getElementById('id').innerHTML = data.id;
    document.getElementById('frontSprite').src = data.sprites.front_default;
    document.getElementById('backSprite').src = data.sprites.back_default;
    document.getElementById('frontSpriteShiny').src = data.sprites.front_shiny;
    document.getElementById('backSpriteShiny').src = data.sprites.back_shiny;
    document.getElementById('type').innerHTML = data.types.map(type => type.type.name).join(", ");

})

