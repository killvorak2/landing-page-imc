
// Funcão do botão Calcular
function botao(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    var imagem = document.querySelector("#img");

    // Realizo o calculo do IMC
    resultado = peso / (altura * altura).toFixed(2);


// Faço a verificação para saber qual foi valor o valor do resultado
// Dentro do IF coloco uma imagem diferente da imagem que está sendo mostrada padrão ao usuário
// Com isso a imagem LOCAL fica invisivel com none e imagem dentro do IF fica block Visivel para usuário

    if(resultado < 17)
    {
        imagem.setAttribute('src', 'img/imc1.png');
        alterar();
    }
    else
    if(resultado >= 17 & resultado <= 18.49)
    {
        imagem.setAttribute('src', 'img/imc2.png');
        alterar();
    }
    else
    if(resultado >= 18.5 & resultado <= 24.99)
    {
        imagem.setAttribute('src', 'img/imc3.png');
        alterar();
    }
    else
    if(resultado >= 25 & resultado <= 29.99)
    {
        imagem.setAttribute('src', 'img/imc4.png');
        alterar();
    }
    else
    if(resultado >= 30 & resultado <= 34.99)
    {
        imagem.setAttribute('src', 'img/imc5.png');
        alterar();
    }else
    if(resultado >= 35 & resultado <= 39.99)
    {
        imagem.setAttribute('src', 'img/imc6.png');
        alterar();
    }
    else
    if(resultado >= 40)
    {
        imagem.setAttribute('src', 'img/imc7.png');
        alterar();
    }

}

function alterar()
{
        document.getElementById('img').style.display = 'block';
        document.getElementById('local').style.display = 'none';
}

// Na função limpar, eu retiro todos os dados que foi digitado no input peso e altura
// Isso facilita eu não precisa usar o F5 para colocar novas informações.
function limpa()
{

    document.getElementById('peso').value = ' '
    document.getElementById('altura').value = ' '
    document.getElementById('img').style.display = 'none';
    document.getElementById('local').style.display = 'block';

}
