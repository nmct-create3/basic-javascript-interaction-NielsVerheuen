document.addEventListener('DOMContentLoaded', function() {

    console.log('Script loaded!');
    handleFloatingLabel();
});

function handleFloatingLabel() {

    let input = document.querySelector(".js-name-input");
    input.addEventListener("blur", handleInputListener)
}

function handleInputListener(e) {
    let label = document.querySelector(".js-floating-label");
    console.log("hier papier:", this.value);
    if (this.value != "") {
        label.classList.add("is-floating");
    } else {
        label.classList.remove("is-floating");
    }
}

function togglePassword() {
    var passwordInput = document.querySelector(".js-password-input");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}