import {reviews} from "./people.js"

const headshot = document.querySelector("#person-img");
const userName = document.querySelector("#author");
const jobTitle = document.querySelector("#job");
const description = document.querySelector("#info");
const cardInfo = document.querySelector(".review");
let change = 0;
let previous = 0;

headshot.src = `${reviews[0].img}`
userName.innerText = `${reviews[0].name}`
jobTitle.innerHTML = `${reviews[0].job}`
description.innerHTML = `${reviews[0].text}`

function updateReview (e){
    console.log("pressed")
    if(e.target.className.includes("fa-chevron-left")){
        (change === 0) ? null : change--;
    }
    if(e.target.className.includes("fa-chevron-right")){
        (change >= reviews.length-1) ? null : change++
    }
    if(e.target.className.includes("random-btn")){
        change = Math.floor(Math.random() * (reviews.length - 1))
        while(change == previous){
          change = Math.floor(Math.random() * (reviews.length - 1))
        }
    }

    previous = change;
    headshot.src = `${reviews[change].img}`
    userName.innerText = `${reviews[change].name}`
    jobTitle.innerHTML = `${reviews[change].job}`
    description.innerHTML = `${reviews[change].text}`
}

cardInfo.addEventListener("click", updateReview)
