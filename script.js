const home = document.getElementById("home");
const about = document.getElementById("about");
const courses = document.getElementById("courses");
const services = document.getElementById("services");
const contact = document.getElementById("contact");
// function fun5(){
//     home.style.borderBottomColor ="transparent";
//     about.style.borderBottomColor ="transparent";
//     courses.style.borderBottomColor ="transparent";
//     services.style.borderBottomColor ="transparent";
//     contact.style.borderBottomColor="Black";
// }
// function fun4(){
//     home.style.borderBottomColor ="transparent";
//     about.style.borderBottomColor ="transparent";
//     courses.style.borderBottomColor ="transparent";
//     services.style.borderBottomColor ="Black";
//     contact.style.borderBottomColor="transparent";
// }
// function fun3(){
//     home.style.borderBottomColor ="transparent";
//     about.style.borderBottomColor ="transparent";
//     courses.style.borderBottomColor ="Black";
//     services.style.borderBottomColor ="transparent";
//     contact.style.borderBottomColor="transparent";
// }
// function fun2(){
//     home.style.borderBottomColor ="transparent";
//     about.style.borderBottomColor ="Black";
//     courses.style.borderBottomColor ="transparent";
//     services.style.borderBottomColor ="transparent";
//     contact.style.borderBottomColor="transparent";
// }
// function fun1(){
//     home.style.borderBottomColor ="Black";
//     about.style.borderBottomColor ="transparent";
//     courses.style.borderBottomColor ="transparent";
//     services.style.borderBottomColor ="transparent";
//     contact.style.borderBottomColor="transparent";
// }
function msg(){
    document.getElementById("notification").style.display = "none";
}
let scrollContainer = document.querySelector(".gallery");
let scrollContainer1 = document.querySelector(".gallery1");
let btnLeft = document.getElementById("btnleft");
let btnRight = document.getElementById("btnright");
let btnLeft1 = document.getElementById("btnleft1");
let btnRight1 = document.getElementById("btnright1");
scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior ="auto";
})
btnRight.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 280
})
btnLeft.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 280
})
scrollContainer1.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer1.scrollLeft += evt.deltaY;
    scrollContainer1.style.scrollBehavior ="auto";
})
btnRight1.addEventListener("click",()=>{
    scrollContainer1.style.scrollBehavior ="smooth";
    scrollContainer1.scrollLeft += 280
})
btnLeft1.addEventListener("click",()=>{
    scrollContainer1.style.scrollBehavior ="smooth";
    scrollContainer1.scrollLeft -= 280
})

function loading(){
    document.getElementById("preloader").style.display = "none";
}

