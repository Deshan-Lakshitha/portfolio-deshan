// Function to send email
function sendEmail(e) {
    e.preventDefault();
    
    // Initialize nodemailer
    const nodemailer = require("nodemailer");

    // Attach the sendEmail function to the form's submit event
    document.getElementById("emailForm").addEventListener("submit", sendEmail);

    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    console.log(name, email, subject, message);
}
