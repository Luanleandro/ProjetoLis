export default function AreaButton() {
  const dropdown = document.querySelector('[data-dropdown] div');
  const loginDrop = document.querySelector('.dropdown-login');

  const html = document.documentElement;
  const outside = 'data-outside';

  function addEventDrop() {
    dropdown.addEventListener('click', handleClick);
  }

  const handleClick = (event) => {
    loginDrop.classList.toggle('ativo');
  };

  addEventDrop();
}
