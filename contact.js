// Initialize EmailJS
(function() {
    emailjs.init("d-eIrIyYpRxwQYaOO"); // Replace with your EmailJS User ID
})();



function sendEmail() {
    // Collect form data
    var templateParams = {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS service and template IDs
    emailjs.send("service_hifm4uh", "template_h9duczy", templateParams)
        .then(function(response) {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Failed to send email.");
            console.log("FAILED...", error);
        });
}