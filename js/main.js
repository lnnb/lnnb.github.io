// Back to top button functionality
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill bars on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add animation class after a small delay for better visual effect
    setTimeout(() => {
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const percentage = bar.getAttribute('aria-valuenow') + '%';
            bar.style.width = '0';
            bar.classList.add('animate-skill');
            bar.style.width = percentage;
        });
    }, 300);
    
    // Initialize PDF generation functionality
    initPdfGeneration();
});

// PDF Generation functionality
function initPdfGeneration() {
    const btnPdf = document.getElementById('btnCrearPdf');
    if (!btnPdf) return;
    
    btnPdf.addEventListener('click', function() {
        const element = document.querySelector('.resume-content');
        
        const opt = {
            margin: 1,
            filename: 'LucianoNavarrete_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Generate PDF if html2pdf is available
        if (typeof html2pdf !== 'undefined') {
            html2pdf().set(opt).from(element).save();
        } else {
            console.error('html2pdf library not loaded');
            alert('PDF generation is not available. Please ensure html2pdf library is loaded.');
        }
    });
}

// Ensure the back to top button works correctly
toTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});