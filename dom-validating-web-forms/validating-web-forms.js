const fnameStrong = document.querySelector("#fname-strong");
const lnameStrong = document.querySelector("#lname-strong");
const emailStrong = document.querySelector("#email-strong");
const passwordStrong = document.querySelector("#password-strong");
const telephoneStrong = document.querySelector("#telephone-strong");
const yourBioStrong = document.querySelector("#your-bio-strong");

let lname = document.forms["myForm"]["lname"].value;
let email = document.forms["myForm"]["email"].value;
let password = document.forms["myForm"]["password"].value;
let telephone = document.forms["myForm"]["telephone"].value;
let yourBio = document.forms["myForm"]["your-bio"].value;

const controlError = new Set(["fname"]);

function fnameValidator() {
    
    const value = document.forms["myForm"]["fname"].value;

    if (value == "") {

        fnameStrong.style.display = "block";
        
        controlError.add("fname");

    }  else {

        fnameStrong.style.display = "none";

        controlError.delete("fname");
    }
}

function validateForm() {

    return controlError.size == 0;

}