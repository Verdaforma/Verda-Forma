document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            // Here you would typically send the data to your server
            // For now, we'll just log it and show a success message
            console.log('Form data:', data);

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again.');
        }
    });
});
