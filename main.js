//Main Selectors:
let fname = document.getElementById("f-name");
let lname = document.getElementById("l-name");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let submit = document.getElementById("submit");


// Paragraph Selectors ;
let fnameP = document.querySelector(".f-name");
let lnameP = document.querySelector(".l-name");
let emailP = document.querySelector(".email");
let passP = document.querySelector(".pass");


// Image Selectors :
let fnameImg = document.querySelector(".input-sign-f img");
let lnameImg = document.querySelector(".input-sign-l img");
let emailImg = document.querySelector(".input-sign-e img");
let passImg = document.querySelector(".input-sign-p img");


let reg = /^\w+\d*@\w+\.com$/ig;




submit.addEventListener("click",function() {
    if (fname.value == "") {
        fnameP.style.display = "flex";
        fnameImg.style.display = "block";
        fname.addEventListener("click" , function() {
            fnameP.style.display = "none";
            fnameImg.style.display = "none";
        })
    }
    if (lname.value == "") {
        lnameP.style.display = "flex";
        lnameImg.style.display = "block";
        lname.addEventListener("click" , function() {
            lnameP.style.display = "none";
            lnameImg.style.display = "none";
        })
    }
    if (!email.value.match(reg)) {
        emailP.style.display = "flex";
        emailImg.style.display = "block";
        email.addEventListener("click" , function() {
            emailP.style.display = "none";
            emailImg.style.display = "none";
        })
    }
    if (password.value == "") {
        passP.style.display = "flex";
        passImg.style.display = "block";
        password.addEventListener("click" , function() {
            passP.style.display = "none";
            passImg.style.display = "none";
        })
    }
    fname.value = "" ;
    lname.value = "" ;
    email.value = "" ;
    password.value = "" ;
})