export default function ImageReplace() {
  const galeria = document.querySelectorAll('.modal-imagens img');
  const galeriaContainer = document.querySelector('.modal-imagens');

  const trocarImagem = (event) => {
    console.log(galeriaContainer);
    const img = event.target;
    const media = matchMedia('(min-width: 1000px)').matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
  };

  const eventoGaleria = (img) => {
    img.addEventListener('click', trocarImagem);
  };

  galeria.forEach(eventoGaleria);
}
