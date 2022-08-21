export const getChukNorrisResponce = () => {
    return fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => (json.value))
}