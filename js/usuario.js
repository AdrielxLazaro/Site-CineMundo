document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("logado") !== "true"){
        window.location.href = "login.html";
        return;
    }

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const tipoLogin = localStorage.getItem("userType");

    const nomeUsuario = usuario ? usuario.nome : "Usuário";
    document.getElementById("bemVindo").innerText = "Bem-vindo, " + nomeUsuario;
    document.getElementById("tipoLogin").innerText = tipoLogin;
});

function sair(){
    localStorage.removeItem("logado");
    localStorage.removeItem("userType");
    window.location.href = "login.html";
}