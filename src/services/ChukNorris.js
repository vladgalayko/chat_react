export const ChukNorris = fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => console.log(json.value))
