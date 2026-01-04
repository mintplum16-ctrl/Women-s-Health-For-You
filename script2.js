// For conditions.html
//Author: NaDari Cole
//Date: 12/31/2025
//Code Type: js
//Filename: scripts.js

// This script handles:
// - Header search clear
// - Page article search (filters cards)
// - Modal popup for articles
// - Back to top button
// - Soft pop sound on modal open (Frutiger Aero style chime)

// Header search clear
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const searchClear = document.querySelector('.search-clear');
    if (searchClear) {
        searchClear.addEventListener('click', function () {
            searchInput.value = '';
            searchInput.focus();
            searchInput.dispatchEvent(new Event('input'));
        });
    }
    if (searchInput) {
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                searchInput.value = '';
                searchInput.blur();
            }
        });
    }
});

// Article search (with clear button)
const articleSearchInput = document.getElementById('article-search-input');
const articleSearchClear = document.querySelector('.search-clear-article');
const articleCards = document.querySelectorAll('.article-card');
if (articleSearchInput) {
    articleSearchInput.addEventListener('input', function () {
        const term = this.value.toLowerCase();
        articleCards.forEach(card => {
            const title = card.querySelector('.article-title').textContent.toLowerCase();
            const excerpt = card.querySelector('.article-excerpt').textContent.toLowerCase();
            if (title.includes(term) || excerpt.includes(term)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
}
if (articleSearchClear) {
    articleSearchClear.addEventListener('click', function () {
        articleSearchInput.value = '';
        articleSearchInput.focus();
        articleSearchInput.dispatchEvent(new Event('input'));
    });
}

// Filter menu toggle
const filterBtn = document.querySelector('.filter-btn');
const filterMenu = document.getElementById('filter-menu');
if (filterBtn) {
    filterBtn.addEventListener('click', function () {
        filterMenu.style.display = filterMenu.style.display === 'block' ? 'none' : 'block';
    });
}
const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const selectedCategories = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.dataset.category);
        articleCards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (selectedCategories.length === 0 || selectedCategories.includes(cardCategory)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Modal functionality
const modal = document.getElementById('article-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.modal-close');

const openSound = new Audio('sounds/open-chime.mp3'); // Download a Frutiger Aero chime MP3 and place in 'sounds/' folder

articleCards.forEach(card => {
    card.addEventListener('click', function () {
        modalTitle.textContent = this.querySelector('.article-title').textContent;
        modalBody.innerHTML = this.dataset.content; // Use data-content for full article
        modal.style.display = 'flex';
        openSound.play();
    });
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
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
