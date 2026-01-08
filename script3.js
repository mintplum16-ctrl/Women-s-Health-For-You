// Author: NaDari Cole
// Date: 12/31/2025
// Filename: script2.js

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const searchClear = document.querySelector('.search-clear');

    function toggleClearButton() {
        if (searchInput.value.length > 0 || searchInput === document.activeElement) {
            searchClear.style.opacity = '1';
            searchClear.style.pointerEvents = 'all';
        } else {
            searchClear.style.opacity = '0';
            searchClear.style.pointerEvents = 'none';
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', toggleClearButton);
        searchInput.addEventListener('focus', toggleClearButton);
        searchInput.addEventListener('blur', toggleClearButton);
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                searchInput.value = '';
                searchInput.blur();
                toggleClearButton();
            }
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', function () {
            searchInput.value = '';
            searchInput.focus();
            toggleClearButton();
        });
    }

    toggleClearButton();
});


// Back to top
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
