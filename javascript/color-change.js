document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', (e) => {

    if (e.target.closest('.new-effect')) {
      return;
    }

    item.classList.add('active');
  });
});