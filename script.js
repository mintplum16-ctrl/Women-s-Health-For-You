// This file is for the index.html files search bar

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const searchClear = document.querySelector('.search-clear');

    searchClear.addEventListener('click', function () {
        searchInput.value = '';
        searchInput.focus();
        // Trigger placeholder-shown update
        searchInput.dispatchEvent(new Event('input'));
    });

    // clear on Escape key
    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.blur();
        }
    });
});
