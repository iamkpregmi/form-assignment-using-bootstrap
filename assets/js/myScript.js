// for name validation code start here
function validateName(inputId, errorId) {
    const input = document.getElementById(inputId);
    const errorMsg = document.getElementById(errorId);
    const isValid = /^[A-Za-z]{3,}$/.test(input.value);

    input.classList.toggle("is-valid", isValid);
    input.classList.toggle("is-invalid", !isValid);
    errorMsg.textContent = isValid ? "" : `Enter at least 3 letters (A-Z only) for ${inputId === "fname" ? "First Name" : "Last Name"}`;
}

document.getElementById("fname").addEventListener("input", () => validateName("fname", "fname-error"));
document.getElementById("lname").addEventListener("input", () => validateName("lname", "lname-error"));
// name validation code end here


// email validation code start here
function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(emailInput.value);

    emailInput.classList.toggle("is-valid", isValid);
    emailInput.classList.toggle("is-invalid", !isValid);
    emailError.textContent = isValid ? "" : "Enter a valid email (example@example.com)";
}

document.getElementById("email").addEventListener("input", validateEmail);
// email validation code end here

// guest validation start here
function validateGuests() {
    const guestsInput = document.getElementById("guests");
    const guestsError = document.getElementById("guests-error");
    const guests = parseInt(guestsInput.value, 10);

    if (isNaN(guests) || guests <= 0) {
        guestsInput.classList.add("is-invalid");
        guestsInput.classList.remove("is-valid");
        guestsError.textContent = "Enter a valid positive number (at least 1 guest).";
    } else if (guests > 50) {
        guestsInput.classList.add("is-invalid");
        guestsInput.classList.remove("is-valid");
        guestsError.textContent = "Maximum 50 guests allowed.";
    } else {
        guestsInput.classList.add("is-valid");
        guestsInput.classList.remove("is-invalid");
        guestsError.textContent = "";
    }
}

document.getElementById("guests").addEventListener("input", validateGuests);
// guest validation end here


// arrival date and time section funcaiton start
function setCurrentDate() {
    const dateInput = document.getElementById("arrival-date");
    const today = new Date();
    dateInput.valueAsDate = today; //for select today date
    dateInput.min = today.toISOString().split("T")[0]; // Restricts past dates
}

function setCurrentTime() {
    const timeInput = document.getElementById("arrival-time");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0"); // 2-digit format
    const minutes = now.getMinutes().toString().padStart(2, "0");
    timeInput.value = `${hours}:${minutes}`;
}

function setAMPM() {
    const ampmSelect = document.getElementById("ampm-select");
    const hours = new Date().getHours();
    ampmSelect.value = hours >= 12 ? "PM" : "AM";
}

setCurrentDate();
setCurrentTime();
setAMPM();


// dropdown section validation on selection
document.getElementById("my-form").addEventListener("submit", function (event) {
    let isValid = true; // flag to check if form is valid

    // Room Type Validation
    const roomSelect = document.getElementById("room-select");
    const roomError = document.getElementById("room-error");

    if (roomSelect.value === "default") {
        roomSelect.classList.add("is-invalid");
        roomError.textContent = "Please select a valid room type before submitting.";
        isValid = false;
    } else {
        roomSelect.classList.remove("is-invalid");
        roomError.textContent = "";
    }

    // Month Validation
    const monthSelect = document.getElementById("month-select");
    const monthError = document.getElementById("month-error");

    if (monthSelect.value === "default" || monthSelect.value === "") {
        monthSelect.classList.add("is-invalid");
        monthError.textContent = "Please select a valid month before submitting.";
        isValid = false;
    } else {
        monthSelect.classList.remove("is-invalid");
        monthError.textContent = "";
    }

    // Day Validation
    const daySelect = document.getElementById("day-select");
    const dayError = document.getElementById("day-error");

    if (daySelect.value === "default" || daySelect.value === "") {
        daySelect.classList.add("is-invalid");
        dayError.textContent = "Please select a valid day before submitting.";
        isValid = false;
    } else {
        daySelect.classList.remove("is-invalid");
        dayError.textContent = "";
    }

    // Year Validation
    const yearSelect = document.getElementById("year-select");
    const yearError = document.getElementById("year-error");

    if (yearSelect.value === "default" || yearSelect.value === "default") {
        yearSelect.classList.add("is-invalid");
        yearError.textContent = "Please select a valid year before submitting.";
        isValid = false;
    } else {
        yearSelect.classList.remove("is-invalid");
        yearError.textContent = "";
    }

    // Free Pickup Radio Button Validation
    const yesPickup = document.getElementById("yes-pickup");
    const noPickup = document.getElementById("no-pickup");
    const pickupError = document.getElementById("pickup-error");

    if (!yesPickup.checked && !noPickup.checked) {
        pickupError.textContent = "Please select an option for free pickup.";
        isValid = false;
    } else {
        pickupError.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});