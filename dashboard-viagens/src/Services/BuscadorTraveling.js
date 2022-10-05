
const BuscadorTraveling = (name) => {
    return fetch("http://localhost:3000/destinations?name=" + name)
    .then((data) => data.json())
    .then( response => response)
}

export {
    BuscadorTraveling
}