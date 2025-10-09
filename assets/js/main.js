// Travel Website Main JavaScript

// View More functionality (for Routes)
function toggleViewMore(sectionId) {
    const content = document.getElementById(sectionId);
    const button = document.querySelector([onclick="toggleViewMore('$ + "sectionId')]");

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'flex'; // Use flex for row
        button.textContent = 'View Less Destinations';
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
    const message = Hi! I want to book a cab for  at ₹. Please provide more details.;
    const whatsappUrl = https://wa.me/=;
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
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Gallery Modal Image Source Update
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const imageSrc = button.getAttribute('data-bs-image-src');
            const imageAlt = button.getAttribute('data-bs-image-alt');
            
            const modalImage = galleryModal.querySelector('.modal-body img');
            const modalCaption = galleryModal.querySelector('.modal-body .caption');
            
            modalImage.src = imageSrc;
            modalImage.alt = imageAlt;
            modalCaption.textContent = imageAlt;
        });
    }
});
