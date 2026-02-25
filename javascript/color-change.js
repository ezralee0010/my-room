document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('active');
  });
});