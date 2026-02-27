document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("emailLogin").value;
        const senha = document.getElementById("senhaLogin").value;

        const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

        if(usuarioSalvo && email === usuarioSalvo.email && senha === usuarioSalvo.senha){
            localStorage.setItem("logado", "true");
            localStorage.setItem("userType", "email"); // tipo de login
            window.location.href = "usuario.html";
        } else {
            alert("Email ou senha incorretos!");
        }
    });
});

// Login social
function loginGoogle() {
    localStorage.setItem("logado", "true");
    localStorage.setItem("userType", "google");
    window.location.href = 'usuario.html';
}

function loginMicrosoft() {
    localStorage.setItem("logado", "true");
    localStorage.setItem("userType", "microsoft");
    window.location.href = 'usuario.html';
}