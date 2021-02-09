async function getPlants() {
    let response = await fetch('https://quiet-hamlet-17686.herokuapp.com/plants')
    let data = await response.json()
    return data;
    }
    getPlants().then(data => console.log(data));