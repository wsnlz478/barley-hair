/* ============================================================
   Barley Hair Transplant - Common JavaScript
   Back to Top button + shared utilities
   ============================================================ */

(function() {
    'use strict';

    // Create back to top button
    function createBackToTopButton() {
        var btn = document.createElement('button');
        btn.className = 'back-to-top';
        btn.setAttribute('aria-label', 'Back to Top');
        btn.innerHTML = '↑';
        btn.type = 'button';
        document.body.appendChild(btn);

        // Show/hide button on scroll
        function toggleButton() {
            if (window.pageYOffset > 300) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }

        // Scroll to top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        window.addEventListener('scroll', toggleButton);
        btn.addEventListener('click', scrollToTop);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createBackToTopButton);
    } else {
        createBackToTopButton();
    }
})();
