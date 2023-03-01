import initScrollSuave from './module/scrollSuave.js';
import MenuMobile from './module/menuMobile.js';
import FilterImagens from './module/filterImagens.js';
import ModalImagem from './module/modalImagem.js';
import ScrollAnima from './module/ScrollAnima.js';
import fetchNumeros from './module/fetchNumeros.js';
import AreaButton from './module/areaButton.js';

initScrollSuave();
MenuMobile();
FilterImagens();
ModalImagem();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

fetchNumeros('./numeroApi.json', '.servicos-item');
AreaButton();
