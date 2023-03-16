const fnameStrong = document.querySelector("#fname-strong");
const lnameStrong = document.querySelector("#lname-strong");
const emailStrong = document.querySelector("#email-strong");
const passwordStrong = document.querySelector("#password-strong");
const telephoneStrong = document.querySelector("#telephone-strong");
const yourbioStrong = document.querySelector("#yourbio-strong");

const controlError = new Set(["fname", "lname", "email", "password", "telephone", "yourbio"]); // içi dolu iken sayfa değişmez

function submitBackgroundColor() {

    const submit = document.forms["myForm"]["submit"];

    if (controlError.size == 0) {

        submit.style.backgroundColor = "#21bf74";

    } else {

        submit.style.backgroundColor = "#444444;";
    }
}

function fnameValidator() {

    const fname = document.forms["myForm"]["fname"];

    if (!!fname.value && typeof fname.value == "string" && fname.value.length > 3 && fname.value.length < 16) {

        fnameStrong.style.display = "none";
        fname.style.outline = "1px solid #21bf74";
        controlError.delete("fname");

        submitBackgroundColor();

    } else {

        fnameStrong.style.display = "block";
        fname.style.outline = "1px solid red";
        controlError.add("fname");

        submitBackgroundColor();
    }
}

function lnameValidator() {

    const lname = document.forms["myForm"]["lname"];

    if (!!lname.value && typeof lname.value == "string" && lname.value.length > 3 && lname.value.length < 16) {

        lnameStrong.style.display = "none";
        lname.style.outline = "1px solid #21bf74";
        controlError.delete("lname");

        submitBackgroundColor();

    } else {

        lnameStrong.style.display = "block";
        lname.style.outline = "1px solid red";
        controlError.add("lname");

        submitBackgroundColor();
    }
}

function emailValidator() {

    const email = document.forms["myForm"]["email"];

    if (!!email.value && /^\w+@\w+\.\w+$/g.test(email.value)) {

        emailStrong.style.display = "none";
        email.style.outline = "1px solid #21bf74";
        controlError.delete("email");

        submitBackgroundColor();

    } else {

        emailStrong.style.display = "block";
        email.style.outline = "1px solid red";
        controlError.add("email");

        submitBackgroundColor();
    }
}

function passwordValidator() {

    const password = document.forms["myForm"]["password"];

    if (
        !!password.value &&
        !/[^A-z^\d^@^-]/g.test(password.value) &&
        /[A-Z]/g.test(password.value) &&
        /[a-z]/g.test(password.value) &&
        /\d/g.test(password.value) &&
        /[-_@]/g.test(password.value) &&
        password.value.length < 20 &&
        password.value.length > 6
    ) {

        passwordStrong.style.display = "none";
        password.style.outline = "1px solid #21bf74";
        controlError.delete("password");

        submitBackgroundColor();

    } else {

        passwordStrong.style.display = "block";
        password.style.outline = "1px solid red";
        controlError.add("password");

        submitBackgroundColor();
    }
}

function telephoneValidator() {

    const telephone = document.forms["myForm"]["telephone"];

    if (!!telephone.value && telephone.value.length == 12 && /^\d{3}-\d{3}-\d{4}/g.test(telephone.value)) {

        telephoneStrong.style.display = "none";
        telephone.style.outline = "1px solid #21bf74";
        controlError.delete("telephone");

        submitBackgroundColor();

    } else {

        telephoneStrong.style.display = "block";
        telephone.style.outline = "1px solid red";
        controlError.add("telephone");

        submitBackgroundColor();
    }
}

function yourbioValidator() {

    const yourbio = document.forms["myForm"]["yourbio"];

    if (!!yourbio.value && !/[^a-z-_\s]+/g.test(yourbio.value) && yourbio.value.length > 8 && yourbio.value.length < 50) {

        yourbioStrong.style.display = "none";
        yourbio.style.outline = "1px solid #21bf74";
        controlError.delete("yourbio");

        submitBackgroundColor();

    } else {

        yourbioStrong.style.display = "block";
        yourbio.style.outline = "1px solid red";
        controlError.add("yourbio");

        submitBackgroundColor();
    }
}

function validateForm() {

    const fname = document.forms["myForm"]["fname"];
    const lname = document.forms["myForm"]["lname"];
    const email = document.forms["myForm"]["email"];
    const password = document.forms["myForm"]["password"];
    const telephone = document.forms["myForm"]["telephone"];
    const yourbio = document.forms["myForm"]["yourbio"];

    if (fname.value == "" && lname.value == "" && email.value == "" && password.value == "" && telephone.value == "" && yourbio.value == "") {

        fnameStrong.style.display = "block";
        fname.style.outline = "1px solid red";

        lnameStrong.style.display = "block";
        lname.style.outline = "1px solid red";

        emailStrong.style.display = "block";
        email.style.outline = "1px solid red";

        passwordStrong.style.display = "block";
        password.style.outline = "1px solid red";

        telephoneStrong.style.display = "block";
        telephone.style.outline = "1px solid red";

        yourbioStrong.style.display = "block";
        yourbio.style.outline = "1px solid red";

        return false;
    }

    return controlError.size == 0; // true dönerse sayfa değişiyor false dönerse sayfa takılı kalıyor.
}