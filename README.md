# Citybar search bar for cities

responsive search bar for searching cities all over the world.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size (desktop and Mobile)
- The User will be able to input and search a city
- The user will be able to add cities to the database
- The user will be able to click and see the selected city in a given space

### Screenshot

![screenshot of the website](/Assets/desktop.jpg)

### Links

<!-- - Live Site URL: [ Click to See the Site](https://firstsignuppageoriguy.netlify.app/) -->

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Vanilla JavaScript
- Mobile-first workflow
- Designed in figma

### What I learned

the project was very insightful for me i've learned:

- How to design an app from 0 to 100
- Design the UI and UX of the app
- Work with modern HTML syntax
- how to work with array and DOM manipulation
- How to work with the actual event on the event listner
- How to work with forEach()
- How to Orginze the code

```JavaScript
// DOM Elements
.
.
//Global Variables
.
.
//Functions
.
.
//Event Listenrs
.
.
// render 
```

```JavaScript
suggestionSearchGrabber.addEventListener('click', (evt) => {
    let city = evt.target.innerHTML;
    selectedCityGrabber.innerHTML = city
    console.log(city)
});
```

```JavaScript
      let render = (citiesArray) => {
    citiesArray.sort();
    databaseGrabber.innerHTML = '';
    citiesArray.forEach(city => {
        databaseGrabber.innerHTML += `<a class="databaseLinks" href="#">${city}</a>`
    });
}

```

### Continued development

I will continue to focus on:

- more organized code and clean code.
- deeper understanding of front end subjects like SCSS and JavaScript.

### Useful resources

- [https://www.w3schools.com/](https://www.w3schools.com/) - this site is my defult site to aquire knowlage about html, css and javascript
- [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/) - this site if amazing if i and to take a deeper dive to understand properties bout html, css and javascript
- [https://stackoverflow.com/](https://stackoverflow.com/) - amaxing blog site that help a lot for finding answers to common questions

## Author

- Website - [Ori Guy](https://github.com/origuy)
