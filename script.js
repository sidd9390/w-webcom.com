const home = document.getElementById("home");
const about = document.getElementById("about");
const courses = document.getElementById("courses");
const services = document.getElementById("services");
const contact = document.getElementById("contact");
function fun5(){
    home.style.borderBottomColor ="transparent";
    about.style.borderBottomColor ="transparent";
    courses.style.borderBottomColor ="transparent";
    services.style.borderBottomColor ="transparent";
    contact.style.borderBottomColor="Black";
}
function fun4(){
    home.style.borderBottomColor ="transparent";
    about.style.borderBottomColor ="transparent";
    courses.style.borderBottomColor ="transparent";
    services.style.borderBottomColor ="Black";
    contact.style.borderBottomColor="transparent";
}
function fun3(){
    home.style.borderBottomColor ="transparent";
    about.style.borderBottomColor ="transparent";
    courses.style.borderBottomColor ="Black";
    services.style.borderBottomColor ="transparent";
    contact.style.borderBottomColor="transparent";
}
function fun2(){
    home.style.borderBottomColor ="transparent";
    about.style.borderBottomColor ="Black";
    courses.style.borderBottomColor ="transparent";
    services.style.borderBottomColor ="transparent";
    contact.style.borderBottomColor="transparent";
}
function fun1(){
    home.style.borderBottomColor ="Black";
    about.style.borderBottomColor ="transparent";
    courses.style.borderBottomColor ="transparent";
    services.style.borderBottomColor ="transparent";
    contact.style.borderBottomColor="transparent";
}
function msg(){
    document.getElementById("notification").style.display = "none";
}
