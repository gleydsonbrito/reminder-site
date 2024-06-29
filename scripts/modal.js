document.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.querySelector('.modal-container');
  const btnAdicionar = document.querySelector('.btn-adicionar');

  btnAdicionar.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
