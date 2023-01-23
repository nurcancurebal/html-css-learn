const fnameStrong = document.querySelector("#fname-strong");
const lnameStrong = document.querySelector("#lname-strong");
const emailStrong = document.querySelector("#email-strong");
const passwordStrong = document.querySelector("#password-strong");
const telephoneStrong = document.querySelector("#telephone-strong");
const yourbioStrong = document.querySelector("#yourbio-strong");


const controlError = new Set(["fname", "lname", "email", "password", "telephone", "yourbio"]); // içi dolu iken sayfa değişmez

const submit = document.forms["myForm"]["submit"];

function submitBackgroundColor() {

    if (controlError.size == 0) {

        submit.style.backgroundColor = "#21bf74";

    } else {

        submit.style.backgroundColor = "#444444;";
    }
}

function fnameValidator() {

    const fname = document.forms["myForm"]["fname"];

    if (fname.value == "") {

        fnameStrong.style.display = "block";
        fname.style.outline = "1px solid red";

        controlError.add("fname");

    } else {

        fnameStrong.style.display = "none";
        fname.style.outline = "1px solid #21bf74";

        if (typeof fname.value == "string") {

            fnameStrong.style.display = "none";
            fname.style.outline = "1px solid #21bf74";

            if (fname.value.split("").length > 3 && fname.value.split("").length < 16) {

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
        } else {

            fnameStrong.style.display = "block";
            fname.style.outline = "1px solid red";
        }
    }
}

function lnameValidator() {

    const lname = document.forms["myForm"]["lname"];

    if (lname.value == "") {

        lnameStrong.style.display = "block";
        lname.style.outline = "1px solid red";

        controlError.add("lname");

    } else {

        lnameStrong.style.display = "none";
        lname.style.outline = "1px solid #21bf74";

        if (typeof lname.value == "string") {

            lnameStrong.style.display = "none";
            lname.style.outline = "1px solid #21bf74";

            if (lname.value.split("").length > 3 && lname.value.split("").length < 16) {

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
        } else {

            lnameStrong.style.display = "block";
            lname.style.outline = "1px solid red";
        }
    }
}

function emailValidator() {

    const email = document.forms["myForm"]["email"];

    if (email.value == "") {

        emailStrong.style.display = "block";
        email.style.outline = "1px solid red";

        controlError.add("email");

    } else {

        emailStrong.style.display = "none";
        email.style.outline = "1px solid #21bf74";

        if (typeof email.value == "string") {

            emailStrong.style.display = "none";
            email.style.outline = "1px solid #21bf74";

            if (email.value.split("").length > 3 && email.value.split("").length < 16) {

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
        } else {

            emailStrong.style.display = "block";
            email.style.outline = "1px solid red";
        }
    }
}

function passwordValidator() {

    const password = document.forms["myForm"]["password"];

    if (password.value == "") {

        passwordStrong.style.display = "block";
        password.style.outline = "1px solid red";

        controlError.add("password");

    } else {

        passwordStrong.style.display = "none";
        password.style.outline = "1px solid #21bf74";

        if (typeof password.value == "string") {

            passwordStrong.style.display = "none";
            password.style.outline = "1px solid #21bf74";

            if (password.value.split("").length > 3 && password.value.split("").length < 16) {

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
        } else {

            passwordStrong.style.display = "block";
            password.style.outline = "1px solid red";
        }
    }
}

function telephoneValidator() {

    const telephone = document.forms["myForm"]["telephone"];

    if (telephone.value == "") {

        telephoneStrong.style.display = "block";
        telephone.style.outline = "1px solid red";

        controlError.add("telephone");

    } else {

        telephoneStrong.style.display = "none";
        telephone.style.outline = "1px solid #21bf74";

        if (typeof telephone.value == "string") {

            telephoneStrong.style.display = "none";
            telephone.style.outline = "1px solid #21bf74";

            if (telephone.value.split("").length > 3 && telephone.value.split("").length < 16) {

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
        } else {

            telephoneStrong.style.display = "block";
            telephone.style.outline = "1px solid red";
        }
    }
}

function yourbioValidator() {

    const yourbio = document.forms["myForm"]["yourbio"];

    if (yourbio.value == "") {

        yourbioStrong.style.display = "block";
        yourbio.style.outline = "1px solid red";

        controlError.add("yourbio");

    } else {

        yourbioStrong.style.display = "none";
        yourbio.style.outline = "1px solid #21bf74";

        if (typeof yourbio.value == "string") {

            yourbioStrong.style.display = "none";
            yourbio.style.outline = "1px solid #21bf74";

            if (yourbio.value.split("").length > 3 && yourbio.value.split("").length < 16) {

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
        } else {

            yourbioStrong.style.display = "block";
            yourbio.style.outline = "1px solid red";
        }
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