const menuprincipal = document.getElementById("menu-principal")

function cliqueburguer() {
    if (menuprincipal.style.display == "block") {
        menuprincipal.style.display = "none"
    } else {
        menuprincipal.style.display = "block"
    }
}