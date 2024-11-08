function changeWindow(){
    document.getElementById("login-content").setAttribute("style", "width: 300px; ")
}

document.getElementById("switchToRegister").addEventListener("click", changeWindow)