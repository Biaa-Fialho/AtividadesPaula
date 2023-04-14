// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.

const usuario00 = prompt("Escreva a altura do um retângulo ")
const usuario01 = prompt("Escreva a largura do um retângulo ")

function  tarefas(largura, altura){
    const area = altura * largura / 2
    return area
}
console.log(tarefas(usuario00, usuario01))

// 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.

const usuario00 = prompt("Digite o ano atual ")
const usuario01 = prompt("Digite seu ano de nascimento ")

function anoIdade (atual, nascimento){
    const contaIdade = atual - nascimento 
    return contaIdade
}
console.log(anoIdade(usuario00, usuario01))

// 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).

const usuario00 = Number(prompt("Digite seu peso em kg "))
const usuario01 = Number(prompt("Digite sua altura em metros "))

function imcPessoa(kg, metros){
    const contaImc = kg / (metros * metros)
    return contaImc
}
console.log(imcPessoa(usuario00, usuario01))

// usar ponto na hora de coloca a altura :)

// 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.

const frase = prompt("Digite uma frase: ");
const frase2 = prompt("Digite outra frase: ");

function  fraseTamIgual(){
    const bool = frase.length === frase2.length

    return bool
}
console.log(fraseTamIgual(frase, frase2))

// 5. Escreva uma função que recebe um array e retorna o último elemento.

const escrevaElementos = prompt("Escreva alguns elementos da sua alimentação ").split(',')

function funcaoArray(array){
    const ultimo = array[array.length - 1];
    return ultimo 
}
console.log(funcaoArray(escrevaElementos))

// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

const frase = prompt("Digite uma frase: ");
const frase2 = prompt("Digite outra frase: ");

function  fraseIgual(frase, frase2){
    const bool = frase.toUpperCase();  
    const bool2 = frase2.toUpperCase();
    if (bool === bool2){
        return true
    }
    else{
        return false 
    }
}
console.log(fraseIgual(frase, frase2))

// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

function rule(newyear, bornyear, cardyear) {
    idade = newyear - bornyear
    emissao = newyear - cardyear
    if (idade <= 20 && emissao >= 5) {
        return true
    } else if (idade <= 20 && emissao < 5) {
        return false
    } else if (idade > 20 && idade <= 50 && emissao >= 10) {
        return true
    } else if (idade > 20 && idade <= 50 && emissao < 10) {
        return false
    } else if (idade > 50 && emissao >= 15) {
        return true
    } else if (idade > 50 && emissao < 15) {
        return false
    }
};

const user7 = parseInt(prompt("digite o ano atual: "));
const user7a = parseInt(prompt("digite o seu ano de nascimento: "));
const user7b = parseInt(prompt("digite o ano que foi emitido sua carteira: "));
console.log(rule(user7, user7a, user7b));