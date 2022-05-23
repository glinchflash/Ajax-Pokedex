//Variable list
let pokeArray = [];
let pokeName = "";
//fetching Api

for (i = 0; i <= 151; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .then(data => {
            pokeArray = data;

        });

}


pokeName = pokeArray[0].species.name;
console.log(pokeName);