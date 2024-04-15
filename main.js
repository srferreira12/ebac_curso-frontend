$(document).ready(function (){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD com 2 dígitos) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '12345-000'
    })

    $('form').validate({
        rules: {
            nome: {required: true},
            email: {required: true, email: true},
            telefone: {required: true, minlength: 14},
            cpf: {required: true},
            endereco: {required: true},
            cep: {required: true, minlength: 9}
        },

    messages: {
        nome: "Insira seu nome completo",
        email: "Insira um email valido",
        telefone: "Insira um numero de celular",
        cpf: "Coloque seu CPF",
        endereco: "Insira seu endereço completo",
        cep: "Insira o CEP de sua rua",
    },

    submitHandler: function (form) {
        alert(`Cadastro concluído com sucesso!`);
    
        nome.value = "";
        email.value = "";
        telefone.value = "";
        cpf.value = "";
        endereco.value = "";
        cep.value = "";
    },
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
        alert(`Exitem ${camposIncorretos} campos incorretos ou vazios`);
        }
    },

    })

})