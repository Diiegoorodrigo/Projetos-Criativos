function verificar() {
    
    let data = new  Date ();
    let ano = data.getFullYear();
    let fAno = document.getElementById("year");
    let res = document.getElementById("res");

if (fAno.length == 0 || Number(fAno.value) > ano){

    window.alert ("[ERRO] Verifique se os dados estão corretos");

} else {
    
    var sex = document.getElementsByName('radSex')
    var idade = ano - Number(fAno.value)
    var gender = ''
    

    if(sex[0].checked) {

        gender =  'Homem'


        if(idade>=0 && idade < 10){

            res.innerHTML = `<img src="imagens/criança-m.jpg" alt="">`
            

        } else if (idade < 21) {

            res.innerHTML = `<img src="imagens/jovem-m.jpg" alt="">`

        } else if (idade < 50){

            res.innerHTML = `<img src="imagens/adulto-m.jpg" alt="">`

        } else {

            res.innerHTML = `<img src="imagens/idoso-m.jpg" alt="">`

        }


        } else if (sex[1].checked) {
        gender =  'Mulher'

        if(idade>=0 && idade < 10){

            res.innerHTML = `<img src="imagens/criança-f.jpg" alt="">`
            

        } else if (idade < 21) {

            res.innerHTML = `<img src="imagens/jovem-f.jpg" alt="">`

        } else if (idade < 50){

            res.innerHTML = `<img src="imagens/adulta-f.jpg" alt="">`

        } else {

            res.innerHTML = `<img src="imagens/idosa-f.jpg" alt="">`
            

        }

    }

    }
    
    res.innerHTML += `<p> Detectamos que é ${gender} com ${idade} anos </p>`
    
   

}





