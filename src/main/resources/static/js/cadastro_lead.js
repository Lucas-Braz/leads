const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

function mostra_toast(icone, mensagem){
    Toast.fire({
      icon: icone,
      title: mensagem
    });
}

$("#cadastrar_lead").click(function(){
    let nome = $("#nome").val();
    let data_nascimento = $("#data_nascimento").val();
    let telefone = $("#telefone").val();
    let email = $("#email").val();

    if(campo_esta_vazio(email) && campo_esta_vazio(telefone)){
        mostra_toast("error","O email ou telefone precisa ser preenchido");
        $("#telefone").focus();
        $("#divTelefone").addClass("error");
        $("#divEmail").addClass("error");
    }else{
        $("#divTelefone").removeClass("error");
        $("#divEmail").removeClass("error");
    }

    if(campo_esta_vazio(data_nascimento)){
        mostra_toast("error","A data de nascimento precisa ser preenchida");
        $("#data_nascimento").focus();
        $("#divDataNascimento").addClass("error");
    }else{
        $("#divDataNascimento").removeClass("error");
    }

    if(campo_esta_vazio(nome)){
        mostra_toast("error","O nome precisa ser preenchido");
        $("#nome").focus();
        $("#divNome").addClass("error");
    }else{
        $("#divNome").removeClass("error");
    }
});

function campo_esta_vazio(campo){
    return campo.trim() == '' ? true : false;
}