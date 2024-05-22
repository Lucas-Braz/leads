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
    let podeSalvar = true;

    if(campo_esta_vazio(email) && campo_esta_vazio(telefone)){
        mostra_toast("error","O email ou telefone precisa ser preenchido");
        $("#telefone").focus();
        $("#divtelefone").addClass("error");
        $("#divemail").addClass("error");
        podeSalvar = false;
    }else{
        $("#divtelefone").removeClass("error");
        $("#divemail").removeClass("error");
    }

    if(campo_esta_vazio(data_nascimento)){
        mostra_toast("error","A data de nascimento precisa ser preenchida");
        $("#data_nascimento").focus();
        $("#divdata_nascimento").addClass("error");
        podeSalvar = false;
    }else{
        $("#divdata_nascimento").removeClass("error");
    }

    if(campo_esta_vazio(nome)){
        mostra_toast("error","O nome precisa ser preenchido");
        $("#nome").focus();
        $("#divnome").addClass("error");
        podeSalvar = false;
    }else{
        $("#divnome").removeClass("error");
    }

    if(podeSalvar){
        $.ajax({
            url: "/cadLead",
            method: "POST",
            data: {
                nome: nome,
                data_nascimento: data_nascimento,
                telefone: telefone,
                email: email
            },
            success: function(data){
                    mostra_toast(data.sucesso ? "success" : "error",data.mensagem);
            },
            error: function(){
                mostra_toast("error","Erro ao cadastrar a Pessoa!");
            }
        });
    }
});

$("#nome, #data_nascimento, #telefone, #email").on("focusout",function(){
    let id = $(this).attr("id");
    if(campo_esta_vazio($("#"+id).val())){
        $("#div"+id).addClass("error");
    }else{
        $("#div"+id).removeClass("error");
    }
});

function campo_esta_vazio(campo){
    return campo.trim() == '' ? true : false;
}