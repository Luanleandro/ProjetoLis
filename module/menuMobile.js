export default function MenuMobile() {
  const buttonMenu = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ['touchstart', 'click'];

  if (buttonMenu) {
    function openMenu(event) {
      event.preventDefault();
      menuList.classList.toggle('ativo');
      buttonMenu.classList.toggle('ativo');
    }
    eventos.forEach((evento) => buttonMenu.addEventListener(evento, openMenu));
  }
}
