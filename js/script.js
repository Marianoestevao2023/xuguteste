let fade = document.getElementById("fade")
let menubar = document.getElementById("menubar")
let b = document.body

function show_menu() {
    menubar.style.transform = "translateY(0)"
    fade.style.display = "flex"
    b.style.overflow = "hidden"
}

function hidden_menu() {
    menubar.style.transform = "translateX(-150%)"
    fade.style.display = "none"
    b.style.overflowY = "scroll"
}