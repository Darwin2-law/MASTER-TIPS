document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const password = document.getElementById("password").value;

        // Check password (this should match your defined password)
        if (password === '???:::#') {
            // Set a flag in localStorage to indicate the user is logged in
            localStorage.setItem("isLoggedIn", "true");
            
            // Redirect to admin page
            window.location.href = "admin.html";
        } else {
            alert("Incorrect password. Please try again.");
        }
    });
});

