function validarCadastro() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
 
    if (nome.value == "") {
        alert("Preencha o campo nome");
        nome.focus();
        return false;
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value == "" || email.value == null) {
        alert("Por favor, insera um e-mail válido");
        email.focus();
        return false;
    }

    if (senha.value == "" || senha.value.length < 8) {
        alert('Preencha o campo senha com minimo 8 caracteres');
        senha.focus();
        return false;
    }

}