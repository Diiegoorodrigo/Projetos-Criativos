// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

// da linha 10 até a linha 15 foi criado três variaveis que receberão os elemenos do que foi declarado no input do conteudo HTML


let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

// na linha 19 criamos uma função para calcular os valores que serão recebidos nos respectivos input

function calcular (){
        

    // foram criadas seis variaveis, sendo três delas que receberão os valores dos inputs, e as outras três pegarão os valores recebidos pelos inputs e se comportarão de acordo com o que foi declarado, nesse caso irão multiplicar os valores por pessoas, criança e duração para retornar o valor de carne, cerveja e refrigerante necessário para um churrasco.

    let adultos = inputAdultos.value;
    let crianca = inputCrianca.value;
    let duracao = inputDuracao.value;

    let qtCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * crianca ) ;
    let qtCerveja = cervejaPP(duracao) * adultos 
    let qtRefri = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * crianca ) ;

    // as variaveis de quantidade de carne, cerveja e refrigerante receberão as funções respectivas, pois há um comportamento referente a duração do churrasco, então foi necessário uma condição para retornar o valor respectivo a duração do churrasco

    resultado.innerHTML = `<p>${qtCarne/1000} Kg de carne.</p> <style> p { margin-top: 20px } </style> `;
    resultado.innerHTML += `<p>${Math.ceil(qtCerveja/355)} latas de cerveja.</p> `;
    resultado.innerHTML += `<p>${Math.ceil(qtRefri/2000)} garrafas de  de refrigerante 2L  </p> `

    // da linha 34 até a 36 foi adicionado um innerHTML, sendo o primeiro de aplicação e os posteriores de adição, para que o elemento "resultado" não fosse substituido pelos conteúdos posteriores

    // para a adição do innerHTML foi colocado dentro de "´´" e para chamar as variaveis usamos ${variavel selecionada}
    
}

// abaixo foram criado três condições para retornar um valor conforme a duração do churrasco.

function carnePP (duracao) {

    if (duracao >= 6) {
        return 600;
    } else {
        return 400;
    }
}

function cervejaPP (duracao) {

    if (duracao >= 6) {
        return 2000
        ;
    } else {
        return 1200;
    }
}

function refriPP (duracao) {

    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}