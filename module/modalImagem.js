import ImageReplace from './imageReplace.js';

export default function ModalImagem() {
  const slideImagens = document.querySelectorAll('.trabalho-projeto-item img');
  const containerModal = document.querySelector("[data-modal='container']");
  const modalImagens = document.querySelector('[data-modal="img"]');
  const modalConteudo = document.querySelector('[data-modal="conteudo"]');
  const modalInfo = document.querySelector('.modal-conteudo-info');
  const btnNext = document.querySelector("[data-button='next']");
  const btnBack = document.querySelector("[data-button='back']");
  const span = document.querySelector('#span');

  const activeClass = 'ativo';

  const addEventImg = () => {
    slideImagens.forEach((img, i, slide) => {
      img.addEventListener('click', () => {
        handleClick(event.currentTarget, i, slide);
        addEventButton(img, i, slide);
      });
      img.classList.remove(activeClass);
    });
  };

  const handleClick = (e) => {
    const img = e;
    const conteudo = img.getAttribute('data-content');
    const titulo = img.alt;
    const categoria = img.getAttribute('data-categoria');

    img.parentElement.classList.add(activeClass);
    containerModal.classList.add(activeClass);

    adicionarImagem(img);
    criarModal(titulo, conteudo, categoria);
    ImageReplace();
  };

  const criarModal = (titulo, conteudo, categoria) => {
    modalConteudo.innerText = ``;

    modalConteudo.innerHTML = `<h1>${titulo}</h1>`;
    modalConteudo.innerHTML += `<p>${conteudo}</p>`;
    span.innerText = categoria;

    modalConteudo.appendChild(modalInfo);
  };

  const adicionarImagem = (img) => {
    const imagens = img.getAttribute('data-imagens').split(' ');
    modalImagens.innerHTML = ``;

    imagens.forEach((item) => {
      modalImagens.innerHTML += `<img src='./imagens/modal/${item}'>`;
    });
  };

  const addEventButton = (img, i, slide) => {
    btnNext.addEventListener('click', () => {
      if (i < slide.length - 1) {
        i++;
        console.log(i)
        handleClick(slide[i], i);
      }
      img.parentElement.classList.remove(activeClass);
    });

    btnBack.addEventListener('click', () => {
      if (i > 0) {
        i--;
        handleClick(slide[i], i);
      }
    });
  };

  const cliqueForaModal = (event) => {
    if (event.target === containerModal) {
      containerModal.classList.toggle(activeClass);
    }
  };

  const addEventClickModal = () => {
    containerModal.addEventListener('click', cliqueForaModal);
  };

  addEventClickModal();
  addEventImg();
}
