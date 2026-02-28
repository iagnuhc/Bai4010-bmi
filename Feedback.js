 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent refresh

    // Get values
    const name = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;

    // Requirement: Alert to confirm submission content
    const confirmMessage = "Please confirm your submission:\n\n" +
                           "Name: " + name + "\n" +
                           "Email: " + email + "\n" +
                           "Subject: " + subject;

    alert(confirmMessage);

    // Show inline success message [cite: 77]
    document.getElementById('successMsg').style.display = 'block';
    this.reset(); // Reset form
});
