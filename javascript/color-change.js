document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', (e) => {

    // If the thing clicked is projector-lights, ignore it
    if (e.target.closest('.new-effect')) {
      return;
    }

    item.classList.add('active');
  });
});