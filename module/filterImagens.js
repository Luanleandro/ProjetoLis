export default function FilterImagens() {
  const liElements = document.querySelectorAll("[data-list='imagens'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] div");


  liElements.forEach((item) => {
    item.addEventListener('click', () => {
      [...tabContent].forEach((item) => (item.style.display = 'none'));
      const elements = document.querySelectorAll(`${item.dataset.content}`);
      if (item.dataset.content === '.todos') {
        [...tabContent].forEach((item) => (item.style.display = 'block'));
      }
      activeElement(elements, item);
    });
  });

  function activeElement(elements, item) {
    liElements.forEach((item) => item.classList.remove('ativo'));
    item.classList.add('ativo');
    elements.forEach((item) => {
      item.style.display = 'inline-block';
      item.style.animation = 'show-down 0.5s forwards';
    });
  }
}
