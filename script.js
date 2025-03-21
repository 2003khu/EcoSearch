document.getElementById('waitlistForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;

    // Send email to designated ID (replace with your backend logic)
    fetch('https://your-backend-endpoint.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for joining the waitlist!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});