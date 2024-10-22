

// document.getElementById('fetch-pokemon').addEventListener('click', async () => {
//     try {
//         // Fetch a random Pokémon ID between 1 and 898 (Pokédex limit)
//         const pokemonId = Math.floor(Math.random() * 898) + 1;
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
//         const data = await response.json();

//         // Extract Pokémon image URL
//         const pokemonImage = data.sprites.front_default;

//         // Get the container to display the Pokémon image
//         const pokemonContainer = document.getElementById('pokemon-container');

//         // Clear any previous Pokémon image
//         pokemonContainer.innerHTML = '';

//         // Create and append a new image element
//         const img = document.createElement('img');
//         img.src = pokemonImage;
//         img.alt = data.name;
//         pokemonContainer.appendChild(img);
//     } catch (error) {
//         console.error('Error fetching Pokémon:', error);
//     }
// });


// Function to fetch Pokémon data
// async function fetchPokemon(isShiny) {
//     try {
//         const pokemonId = Math.floor(Math.random() * 898) + 1;
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
//         const data = await response.json();
//         const imageUrl = isShiny ? data.sprites.front_shiny : data.sprites.front_default;

//         const pokemonContainer = document.getElementById('pokemon-container');
//         pokemonContainer.innerHTML = '';
//         const img = document.createElement('img');
//         img.src = imageUrl;
//         img.alt = data.name;
//         pokemonContainer.appendChild(img);
//     } catch (error) {
//         console.error('Error fetching Pokémon:', error);
//     }
// }



// Event listeners for buttons
// document.getElementById('fetch-pokemon').addEventListener('click', () => fetchPokemon(false));
// document.getElementById('fetch-shiny').addEventListener('click', () => fetchPokemon(true));

document.addEventListener('DOMContentLoaded', () => {
    const fetchPokemonButton = document.getElementById('fetch-pokemon');
    const fetchShinyButton = document.getElementById('fetch-shiny');
    const pokemonContainer = document.getElementById('pokemon-container');

    // Function to fetch Pokémon data
    function fetchPokemon(isShiny) {
        // Choose a random Pokémon ID between 1 and 898 (as of current API data)
        const pokemonId = Math.floor(Math.random() * 898) + 1;
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Get Pokémon name
                const pokemonName = data.name;

                // Get image URL based on shiny status
                const imageUrl = isShiny ? data.sprites.front_shiny : data.sprites.front_default;

                // Update the container with Pokémon name and image
                pokemonContainer.innerHTML = `
                    <h2>${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
                    <img src="${imageUrl}" alt="${pokemonName}" />
                `;
            })
            .catch(error => console.error('Error fetching Pokémon data:', error));
    }

    // Attach event listeners to buttons
    fetchPokemonButton.addEventListener('click', () => fetchPokemon(false));
    fetchShinyButton.addEventListener('click', () => fetchPokemon(true));
});
