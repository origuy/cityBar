// DOM Elements

const searchInputGrabber = document.getElementById("search");
const addButtonGrabber = document.getElementsByClassName("middleContainer")[0];
const suggestionSearchGrabber = document.getElementsByClassName("hintLinksContainer")[0];
const databaseGrabber = document.getElementsByClassName("linksContainer")[0];
const selectedCityGrabber = document.getElementsByClassName("main-section-selected-city")[0];

//Global Variables
let citiesArray = ["Budapest", "Tel Aviv", "Madrid", "New York", "Beer Sheva", "Hadera", "Melborn", "Rome", "Napoli", "Barcelona", "London"];

//Functions

let render = (citiesArray) => {
    citiesArray.sort();
    databaseGrabber.innerHTML = '';
    citiesArray.forEach(city => {
        databaseGrabber.innerHTML += `<a class="databaseLinks" href="#">${city}</a>`
    });
}
let getLettersTyped = (evt) => {
    let word = searchInputGrabber.value;
    console.log(word)
    suggestionSearchGrabber.innerHTML = '';

    if(word === ''){
        document.getElementsByClassName("main-section-hint")[0].style.display = 'none'
    }else{
        document.getElementsByClassName("main-section-hint")[0].style.display = 'inline-block'
        citiesArray.forEach(city => {
            city.includes(word) ? suggestionSearchGrabber.innerHTML += `<a class="hintClick" href="#">${city}</a>` : '';
        })
    }


}

let addToDatabase = () => {
    let word = searchInputGrabber.value
    citiesArray.includes(word) ? '' : citiesArray.push(word) 
    render(citiesArray)
}


//Event Listenrs

searchInputGrabber.addEventListener('keyup', getLettersTyped);

addButtonGrabber.addEventListener('click', addToDatabase);

suggestionSearchGrabber.addEventListener('click', (evt) => {
    let city = evt.target.innerHTML;
    selectedCityGrabber.innerHTML = city
    console.log(city)
});
databaseGrabber.addEventListener('click', (evt) => {
    let city = evt.target.innerHTML;
    selectedCityGrabber.innerHTML = city
    console.log(city)
});


// render the page initial Values

render(citiesArray);



