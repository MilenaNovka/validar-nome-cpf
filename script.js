const btn = document.getElementById('btn-validar');
const status = document.getElementById('status');
let body = document.getElementById('body')
let container = document.getElementById('container')
let titulo = document.getElementById('titulo')

let tema = -1

function cadastrar(){
    let nome = prompt("Digite o seu nome completo");
    if (!nome) return;

    let nomesArray = nome.trim().split(/\s+/);
    if (nomesArray.length < 2){
        alert("Erro: Digite nome e sobrenome.");
        return; 
    }
}

function inserir(){
    let cpf = prompt("Digite o CPF (apenas números):");
    if (!cpf) return;
    let cpfLimpo = cpf.replace(/\D/g, '');

    if(validarCPF(cpfLimpo)) {
        status.innerHTML = `<span style="color:green">👌 Cliente ${cpfLimpo} validado!</span>`;
    }else{
        status.innerHTML = `<span style="color:red">👎 CPF ${cpfLimpo} é invalido.</span>`;
    }
};

function validarCPF(cpf){
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    let s = 0, r;
    for (let i=1; i<=9; i++) s += parseInt(cpf[i-1]) * (11-i);
    r = (s * 10) % 11;
    if (r === 10 || r === 11) r = 0;
    if (r !== parseInt(cpf[9])) return false;
    s = 0;
    for (let i=1; i<=10; i++) s += parseInt(cpf[i-1]) * (12-i);
    r = (s * 10) % 11;
    if (r === 10 || r === 11) r = 0;
    return r === parseInt(cpf[10]);
}

function Tema(){
    tema *= -1

    if(tema === 1){
        container.style.backgroundColor = "black"
        container.style.color = "white"
        body.style.backgroundColor = "rgba(44, 44, 44, 1)"
        titulo.style.color = "rgba(116, 116, 209, 1)";
    }else{
        container.style.backgroundColor = "white"
        container.style.color = "black"
        body.style.backgroundColor = "rgb(233, 233, 233)"
        titulo.style.color = "rgba(20, 22, 129, 1)";
    }
}