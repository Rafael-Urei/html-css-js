let menu = document.getElementById("side_menu")
let menu_links = document.getElementById("side_menu_structure")
var closebtn = document.getElementById("closebtn")

function openMenu() {
    if (menu.style.display == "none"){
        menu.style.display = "flex"
        menu_links.style.display = "flex"
        closebtn.style.display = "flex"
    } else {
        menu.style.display = "none"
        menu_links.style.display = "none"
    }
}

function close_menu() {
    if (menu.style.display == "flex") {
        menu.style.display = "none"
        closebtn.style.display = "none"
    }
}