const $menu = document.querySelector('#button');
const $menuList = document.querySelector('.menu')

$menu.addEventListener('click', function(e){ 
    e.preventDefault();
    $menuList.classList.toggle('menu--open');
})