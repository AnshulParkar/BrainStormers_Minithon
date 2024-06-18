// JavaScript code to customize the login form
document.addEventListener("DOMContentLoaded", function () {
    let loginInput = document.querySelector(".login");
    let overlay = document.querySelector(".overlay");
    let closeSpan = document.querySelector(".overlay span");
    let userLogin = document.querySelector(".login-user");

    // Function to open the login form overlay
    function openLoginForm() {
        overlay.classList.add("open");
    }

    // Function to close the login form overlay
    function closeLoginForm() {
        overlay.classList.remove("open");
    }

    // Add click event listeners to the login button and user icon
    loginInput.addEventListener("click", openLoginForm);
    userLogin.addEventListener("click", openLoginForm);

    // Add click event listener to the close button (X) in the overlay
    closeSpan.addEventListener("click", closeLoginForm);
});
