let open_menu = $("#open-menu");
let close_menu = $("#close-menu");
let menu_list = $("#menu-list");
let menu_bg = $("#menu-bg");

open_menu.on("click" , function () {
    console.log("hello");
    open_menu.addClass("hide");
    close_menu.addClass("show");

    menu_list.addClass("show-flex");
    menu_bg.addClass("show");

});

close_menu.on("click" , function () {
    console.log("hello");
    open_menu.removeClass("hide");
    close_menu.removeClass("show");

    menu_list.removeClass("show-flex");
    menu_bg.removeClass("show");

});

