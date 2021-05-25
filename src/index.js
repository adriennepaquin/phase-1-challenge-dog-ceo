console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

document.addEventListener('DOMContentLoaded', getImages)
document.addEventListener('DOMContentLoaded', getBreeds)

function getImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    //.then(data => renderImages(data.message))
    .then(data => data.message.forEach(renderImage))
    
}

function renderImage(url){
    let image = document.createElement('img')
    image.src = url
    let div = document.querySelector('#dog-image-container')
    div.append(image)
}

function getBreeds() {
    fetch(breedUrl)
    .then(respon => respon.json())
    .then(data => Object.keys(data.message).forEach(renderBreed))
}

function renderBreed(breed) {
    let li = document.createElement('li');
    li.textContent = breed;
    let ul = document.querySelector('#dog-breeds')
    ul.append(li)
}