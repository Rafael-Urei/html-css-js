let arrow_up = document.getElementById("arrow_down")
let arrow_up2 = document.getElementById("arrow_down2")
let arrow_up3 = document.getElementById("arrow_down3")
let arrow_up4 = document.getElementById("arrow_down4")
let dropdown_menu = document.getElementById("dropmenu_f")
let dropdown_menuc = document.getElementById("dropmenu_c")
let menu = document.getElementById("side_menu")
let menu_links = document.getElementById("side_menu_structure")
var closebtn = document.getElementById("closebtn")
var sidelinkscontainer = document.getElementById("sidelist_container")
var sidelinksimg = document.getElementById("sidemenu_menu_img")
var sidelinksf = document.getElementById("sidelist_links_f")
var sidelinksc = document.getElementById("sidelist_links_c")
    
sidelinksf.style.display = "none"
sidelinksc.style.display = "none"
dropdown_menuc.style.display = "none"
dropdown_menu.style.display = "none"
menu_links.style.display = "none"
closebtn.style.display = "none"
menu.style.display = "none"

function dropmenu() {
    if (dropdown_menu.style.display == "none") {
        dropdown_menu.style.display = "flex"
        arrow_up.src="images/icon-arrow-up.svg"
    } else {
        dropdown_menu.style.display = "none"
        arrow_up.src="images/icon-arrow-down.svg"
    }
}

function dropmenu2() {
    if (dropdown_menuc.style.display == "none") {
        dropdown_menuc.style.display = "flex"
        arrow_up2.src="images/icon-arrow-up.svg"
    } else {
        dropdown_menuc.style.display = "none"
        arrow_up2.src="images/icon-arrow-down.svg"
    }
}

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

function openlist() {
    if (sidelinksf.style.display == "none") {
        sidelinksf.style.display = "flex"
        sidelinksimg.style.display = "flex"
        arrow_up3.src="images/icon-arrow-up.svg"
    } else {
        sidelinksf.style.display = "none"
        sidelinksimg.style.display = "none"
        arrow_up3.src="images/icon-arrow-down.svg"
    }
}

function openlistc() {
    if (sidelinksc.style.display == "none") {
        sidelinksc.style.display = "flex"
        arrow_up4.src="images/icon-arrow-up.svg"
    } else {
        sidelinksc.style.display = "none"
        arrow_up4.src="images/icon-arrow-down.svg"
    }
}