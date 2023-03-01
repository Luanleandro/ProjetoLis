import AnimaNumeros from './animaNumeros.js';

export default function fetchNumeros(url, target) {
  const numerosContainer = document.querySelector(target);

  // Cria a div contento informações com o total de animais
  function createServicos(servico) {
    const div = document.createElement('div');
    div.innerHTML = ` <img src=${servico.img} alt="numeros" width='117px' height='117px'> <div class='servicos-item-conteudo'><h2 data-numero>${servico.total}</h2><p>${servico.titulo}</p></div> `;
    return div;
  }

  // Preencher animal no DOM
  function preencherServicos(servico) {
    const divServico = createServicos(servico);
    numerosContainer.appendChild(divServico);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros(
      '[data-numero]',
      '.servicos-container',
      'ativo',
    );
    animaNumeros.init();
  }

  // Puxa os numeros através de um arquivo json
  async function criarServicos() {
    try {
      // Fetch, espera resposta e tranforma em JSON
      const servicoResponse = await fetch(url);

      const servicoJSON = await servicoResponse.json();
      servicoJSON.forEach((servico) => preencherServicos(servico));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarServicos();
}
