document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (!email || !password) {
        showError("Please fill in all fields.");
        return;
    }

    // Simulate a login request (replace with actual API call)
//     setTimeout(() => {
//         if (email === "test@example.com" && password === "password123") {
//             // Successful login
//             window.location.href = "/html/index.html"; // Redirect to home page
//         } else {
//             // Failed login
//             showError("Invalid email or password.");
//         }
//     }, 1000);
    window.location.href = "/html/index.html"; 
});

function showError(message) {
    const errorElement = document.getElementById("error-message");
    errorElement.textContent = message;
    errorElement.style.display = "block"; // Show error message
}