let bannerSlides = ["./images/sicc33-banner.png", "./images/banner-1.png"];
let counterLecture = document.getElementById("counter1");
let counterCourse = document.getElementById("counter2");
let counterSpeakers = document.getElementById("counter3");
let counterHours = document.getElementById("counter4");
let cardWrapper = document.querySelector(".card-wrapper");
let boxProgramming = document.querySelector(".c-day__box");
let roadMap = document.querySelector(".c-day__roadmap");
let cProgramming = document.querySelector("#c-programming");
let subtitleDay = document.querySelector(".c-day__subtitle");
let displayNone = true;

let photosWrapper = document.querySelector(".photos-wrapper");
let sponsorWrapper = document.querySelector(".c-sponsors__wrapper");


function slide1(){
    document.getElementById("c-introduction__banner").src="./images/sicc33-banner.jpg";
    setTimeout("slide2()", 3000)
}

function slide2(){
    document.getElementById("c-introduction__banner").src="./images/banner-1.jpg"
    setTimeout("slide1()", 3000);
}

function increment(i,max,element){
    if (i > max) return;
    setTimeout(function(){
        element.innerText = Math.round(i);
        increment(i+(max/100), max, element);
    }, 10)
}

increment(0, 6, counter1);
increment(0, 2, counter2);
increment(0, 10, counter3);
increment(0, 12, counter4);

function createCard(image, name, description){
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    cardWrapper.appendChild(newCard);

    let newImageContent = document.createElement("div");
    newImageContent.classList.add("image-content");
    newCard.appendChild(newImageContent);

    let newOverlay = document.createElement("span");
    newOverlay.classList.add("overlay");
    newImageContent.appendChild(newOverlay);

    let newCardImage = document.createElement("div");
    newCardImage.classList.add("card-image");
    newImageContent.appendChild(newCardImage);

    let newImg = document.createElement("img");
    newImg.setAttribute("class", "card-img");
    newImg.setAttribute("src", "./images/speakers/" + image + ".png");
    newCardImage.appendChild(newImg);
 
    let newCardContent = document.createElement("div");
    newCardContent.classList.add("card-content");
    newCard.appendChild(newCardContent);

    let newName = document.createElement("h2");
    newName.classList.add("name");
    newCardContent.appendChild(newName)
    newName.innerText = name;

    let newDescription = document.createElement("div");
    newDescription.classList.add("description");
    newCardContent.appendChild(newDescription);
    newDescription.innerText = description;
    
    let newButton = document.createElement("button");
    newButton.classList.add("button-viewmore");
    newCardContent.appendChild(newButton);
    newButton.innerHTML = "Ver mais";
    
}

speakers.forEach( speaker => {
    createCard(speaker.image, speaker.name, speaker.description)
})

let cardsCarousel = document.querySelectorAll(".card");
let index = 0;
let widthWindow = window.innerWidth;

function showMore(increase){

    widthWindow > 1350 ? increase += 3 : increase = 1;
    widthWindow > 690 ? increase += 1 : increase = 1;
    

    index = index + increase;
    index = Math.min(Math.max(index,0), cardsCarousel.length-1);
    cardsCarousel[index].scrollIntoView({behavior: 'smooth', block:"nearest"});
 
}

function showLess(increase){

    widthWindow > 1350 ? increase -= 3 : increase = -1;
    widthWindow > 690 ? increase -= 1 : increase = -1;

    index = index + increase;
    index = Math.min(Math.max(index,0), cardsCarousel.length-1);
    cardsCarousel[index].scrollIntoView({behavior: 'smooth', block:"nearest"});
 
}

boxProgramming.addEventListener("click", showRoadMap);

function showRoadMap(){

    if (displayNone === true){
        roadMap.style.opacity = "1";
        roadMap.style.height = "auto";
        displayNone = false;
        cProgramming.style.height = "auto";
        subtitleDay.innerHTML = "- DIA 26 de NOVEMBRO";
    } else{
        roadMap.style.height = "0";
        roadMap.style.opacity = "0";
        displayNone = true;
        cProgramming.style.height = "auto";
        subtitleDay.innerHTML = "+ DIA 26 de NOVEMBRO";
    }
}


function newOrganization(img, name, cargo){
    let organizationSingle = document.createElement("div");
    organizationSingle.classList.add("organization-single");
    photosWrapper.appendChild(organizationSingle);

    let imgSingle = document.createElement("img");
    imgSingle.setAttribute("class", "img-single");
    imgSingle.setAttribute("src", "./images/organizers/" + img + ".png")
    organizationSingle.appendChild(imgSingle);

    let descriptionSingle = document.createElement("p");
    organizationSingle.appendChild(descriptionSingle);
    descriptionSingle.innerHTML = "<strong>" + name + "</strong>" + "<br>" + cargo;
    descriptionSingle.setAttribute("style", "text-align: center");

    
}


organizers.forEach( organizer => {
    newOrganization(organizer.image, organizer.name, organizer.description);
});

function newSponsor(img){
    let sponsorSingle = document.createElement("div");
    sponsorSingle.classList.add("c-sponsor__single");
    sponsorWrapper.appendChild(sponsorSingle);

    let sponsorImg = document.createElement("img");
    sponsorImg.setAttribute("class", "c-sponsor__img");
    sponsorImg.setAttribute("src", "./images/sponsors/" + img + ".png");
    sponsorSingle.appendChild(sponsorImg)
}

sponsors.forEach( sponsor => {
    newSponsor(sponsor.image)
});
