var btn =  document.querySelector ('.btn');
var bg = document.querySelector('.change')
var bgOff = document.querySelector('.main')

console.log(btn);

btn.addEventListener('click', function(){

    console.log(this);

    this.style.display='none'
    bgOff.style.display = 'none'
    bg.style.display = 'flex'

})

const txt = document.querySelector('.txt');
const text ='Bem vinda! Sei que algumas coisas não podem ser desfeitas, mas podemos procurar acertar. Sei que errei com você, fiz algo que prometi a você que não faria e isso acabou comigo pois vi o quão idiota eu fui mas quero lhe pedir desculpas do fundo do meu coração, sei que apenas palavras não é o bastante por isso irei me esforçar para mostrar que realmente me importo contigo e que tenho um grande carinho por você, Lorena quero lhe pedir perdão e que me permita permanecer próximo de você! ';
const interval = 100;

function showText(txt, text, interval) {
    
    const char = text.split("").reverse();
    const typer = setInterval(()=>{
        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();
        txt.innerHTML += next;
        

    }, interval)

}

showText(txt,text, interval)