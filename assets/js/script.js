/********************** Menu ************************/
const $menu = document.querySelector('#button');
const $menuList = document.querySelector('.menu')

$menu.addEventListener('click', function(e){ 
    e.preventDefault();
    $menuList.classList.toggle('menu--open');
})

/********************** Scroll to top ************************/
var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
