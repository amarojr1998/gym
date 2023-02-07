const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const address = document.getElementById("adr");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const state = document.getElementById("state");
const cardname = document.getElementById("cname");
const cardnumber = document.getElementById("ccnum");
const expyear = document.getElementById("expyear");
const cardverification = document.getElementById("cvv");

function checkInputs() {
    //get values from the input
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const zipValue = zip.value.trim();
    const stateValue = state.value.trim();
    const cardnameValue = cardname.value.trim();
    const cardnumberValue = cardnumber.value.trim();
    const expyearValue = expyear.value.trim();
    const cardverificationValue = cardverification.value.trim();


    if (firstnameValue === "") {
        //show error
        //add error class
        setErrorFor(firstname, "First Name cannot be empty");
    } else {
        //add success class
        setSuccessFor(firstname);
    }

    if (lastnameValue === "") {
        setErrorFor(lastname, "Last Name cannot be empty");
    } else {
        setSuccessFor(lastname);
    }


    if (emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is invalid");
    } else {
        setSuccessFor(email);
    }


    if (addressValue === "") {
        setErrorFor(address, "Address cannot be empty");
    } else {
        setSuccessFor(address);
    }

    if (cityValue === "") {
        setErrorFor(city, "City cannot be empty");
    } else {
        setSuccessFor(city);
    }

    if (zipValue === "") {
        setErrorFor(zip, "Zip cannot be empty");
    } else {
        setSuccessFor(zip);
    }

    if (stateValue === "") {
        setErrorFor(state, "State cannot be empty");
    } else {
        setSuccessFor(state);
    }

    if (cardnameValue === "") {
        setErrorFor(cardname, "Card name cannot be empty");
    } else {
        setSuccessFor(cardname);
    }


    if (cardnumberValue === "") {
        setErrorFor(cardnumber, "Card number cannot be empty");
    } else {
        setSuccessFor(cardnumber);
    }

    if (expyearValue === "") {
        setErrorFor(expyear, "expiration year cannot be empty");
    } else {
        setSuccessFor(expyear);
    }

    if (cardverificationValue === "") {
        setErrorFor(cardverification, "ccv cannot be empty");
    } else {
        setSuccessFor(cardverification);
    }
}




function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control div

    const small = formControl.querySelector("small");

    //add error message for the small tag
    small.innerText = message;

    //add error class
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control div

    //add error class
    formControl.className = "form-control success";
}

// -------------X-------------


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

// ------------X----------
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}