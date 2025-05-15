// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// Like button functionality
const likeBtn = document.getElementById('likeBtn');
if (likeBtn) {
  let liked = false;
  likeBtn.addEventListener('click', () => {
    liked = !liked;
    likeBtn.textContent = liked ? 'Liked!' : 'Like';
    likeBtn.style.backgroundColor = liked ? '#4caf50' : '';
  });
}

// Product filter (for ecommerce)
const filterInput = document.getElementById('filterInput');
const productItems = document.querySelectorAll('.product-item');
if (filterInput && productItems.length > 0) {
  filterInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    productItems.forEach(item => {
      const name = item.querySelector('.product-name').textContent.toLowerCase();
      item.style.display = name.includes(value) ? '' : 'none';
    });
  });
}