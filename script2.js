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

// Header search clear functionality
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

// Page article search – filters the 6 article cards on this page
const articleSearchInput = document.getElementById('article-search-input');
if (articleSearchInput) {
    const articleCards = document.querySelectorAll('.article-card');
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

// Modal popup functionality
const modal = document.getElementById('article-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.modal-close');

const openSound = new Audio('https://freesound.org/data/previews/757/757406_16633670-lq.mp3'); // Frutiger Aero style soft chime (free from freesound.org)

document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', function () {
        modalTitle.textContent = this.dataset.title;
        modalBody.innerHTML = this.dataset.content || '<p>Full article content coming soon...</p>'; // Replace with real content later
        modal.style.display = 'flex';
        openSound.currentTime = 0;
        openSound.play().catch(e => console.log('Sound play prevented:', e)); // Plays soft pop/chime
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}

// Close modal when clicking outside content
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
