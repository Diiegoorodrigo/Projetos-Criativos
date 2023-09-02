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