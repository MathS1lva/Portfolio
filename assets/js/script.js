$(document).ready(function() {


    var Menu = {
        body: $('.menu'),
        button: $('.button'),
    };

    Menu.button.click(function () {
        Menu.body.toggleClass('menu--closed');
        Menu.body.toggleClass('menu--open');
    });

});