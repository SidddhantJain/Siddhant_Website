// Initialize EmailJS with your user ID
(function () {
    emailjs.init("jZIJ8-feuif6Vr-kF");
})();

// Function to handle the form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value || "No Subject";
    const message = document.getElementById("message").value;

    // Validate inputs
    if (!name || !email || !message) {
        alert("Please fill out all required fields (Name, Email, Message).");
        return;
    }

    // Prepare email parameters
    const templateParams = {
        from_name: name,
        to_name: "Siddhant Mishrikotkar", // Replace with your name
        subject: subject,
        message: message,
        from_email: email,  
    };

    // Send email using EmailJS
    emailjs
        .send("service_7iruidu", "template_9v7916v", templateParams)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset(); // Reset form
        })
        .catch(function (error) {
            console.error("FAILED...", error);
            alert("Failed to send message. Please try again.");
        });
});
