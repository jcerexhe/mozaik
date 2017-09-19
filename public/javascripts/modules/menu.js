export default window.onload = function () {
  const menu = document.getElementById('menu');
  const navbar = document.getElementById('nav');
  const isClear = navbar.classList.contains('clear');
  document.getElementById('open-menu').onclick = function (e) {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      if (!isClear) navbar.classList.add('clear');
      this.classList.add('open');
      document.body.classList.add('overflow-hidden');
    } else {
      menu.classList.add('hidden');
      if (!isClear) navbar.classList.remove('clear');
      this.classList.remove('open');
      document.body.classList.remove('overflow-hidden');
    }
  }
}
