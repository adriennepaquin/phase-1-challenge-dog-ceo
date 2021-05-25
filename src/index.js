console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


getImages()
getBreeds()

let breedList = document.querySelector('ul')
breedList.addEventListener('click', (e) => turnBlue(e.target.id))

const breedDropdown = document.querySelector('#breed-dropdown')
breedDropdown.addEventListener('change', e => filterAlpha(e.target.value))

function getImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => data.message.forEach(renderImage))
}

function renderImage(url){
    let image = document.createElement('img')
    image.src = url
    let div = document.querySelector('#dog-image-container')
    div.append(image)
}

let breedData;
function getBreeds() {
    return fetch(breedUrl)
    .then(respon => respon.json())
    .then(data => {
        breedData = Object.keys(data.message)
        breedData.forEach(renderBreed)
    })
}

function renderBreed(breed) {
    let li = document.createElement('li');
    li.textContent = breed;
    li.id = breed
    breedList.append(li)
}

function turnBlue(id){
    document.querySelector(`#${id}`).style.color = "blue"
}

function filterAlpha(letter) {
    let filteredDogs = breedData.filter(breed => breed[0] === letter);
    breedList.innerHTML = "";
    filteredDogs.forEach(renderBreed);
}