// Travel Website Main JavaScript

// View More functionality
function toggleViewMore(sectionId) {
    const content = document.getElementById(sectionId);
    const button = document.querySelector([onclick="toggleViewMore('$ + "sectionId')]");

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'View Less';
        button.classList.remove('btn-outline-primary');
        button.classList.add('btn-primary-custom');
    } else {
        content.style.display = 'none';
        button.textContent = 'View More Destinations';
        button.classList.remove('btn-primary-custom');
        button.classList.add('btn-outline-primary');
    }
}

// WhatsApp integration
function bookOnWhatsApp(route, price) {
    const message = Hi! I want to book a cab for $ + "{route} at ₹$" + "{price}. Please provide more details.";
    const whatsappUrl = https://wa.me/=$ + "{encodeURIComponent(message)}";
    window.open(whatsappUrl, '_blank');
}

// Smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
