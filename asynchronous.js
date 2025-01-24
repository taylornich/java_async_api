//Question 1 Task 1

const publicKey = 'efd1ec1409ccbe082faeba0a447a504a';
const privateKey = '573daad0e4789d6d87b8224bc1d6e81e7bd557c2';


//Question 1 Task 2
function fetchMarvelCharacters() {
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey);
    const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
    const url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.data && data.data.results){
                updateUI(data.data.results);
            }
            else {
                console.error("No data found.");
                updateUI([]);
            }

        })
        .catch(error => {
            console.error('Error fetching data:', error);
            updateUI([]);
    });
}

//Question 1 Task 3
function updateUI(characters) {
    const charactersList = document.getElementById('characters-list');
    charactersList.innerHTML = '';
    
    if (characters.length === 0) {
        charactersList.innerHTML = '<p>No characters found.</p>';
        return;
    }
    
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character');
        characterDiv.innerHTML = `
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
            <div>
              <h3>${character.name}</h3>
              <p>${character.description || 'No description available.'}</p>
            </div>
          `;
        charactersList.appendChild(characterDiv);
    });
}

fetchMarvelCharacters();