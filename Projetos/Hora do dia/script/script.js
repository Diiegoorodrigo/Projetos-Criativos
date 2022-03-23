function carregar () {

    let data = new Date();
    let hour = data.getHours();
    let min = data.getMinutes();
    let msg = document.getElementById('msg');
    let img = document.getElementById('photo');

    
    

    if(hour >= 0 && hour <= 12) {

        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#f2f3b5'
        msg.innerHTML += `<h1>Bom dia!!</h1>`
        msg.innerHTML += `<p> Agora são ${hour} horas e ${min} minutos </p>`
        

    }   else if ( hour > 12 && hour <= 18) {

        img.src = 'imagens/tarde.jpg'
        msg.innerHTML += `<h1>Boa tarde!!</h1>`
        msg.innerHTML += `<p> Agora são ${hour} horas e ${min} minutos </p>`
        document.body.style.backgroundColor = '#d47d0b'

    } else {

        img.src = 'imagens/noite.jpg'
        msg.innerHTML += `<h1>Boa noite!!</h1>`
        msg.innerHTML += `<p> Agora são ${hour} horas e ${min} minutos </p>`
        document.body.style.backgroundColor = '#2e2e2d'

    }

}