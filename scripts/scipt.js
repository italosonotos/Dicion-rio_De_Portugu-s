let url = 'https://dicio-api-ten.vercel.app/v2/';

let inputTxt = document.querySelector('#input');
let btn = document.querySelector('#botao');
let resultado = document.querySelector('#result');

btn.addEventListener('click', () => {
    let palavra = inputTxt.value;
    
    if (palavra === '') {
        resultado.innerHTML = `<p id="resultado">Escreva algo</p>`
    } else {
        fetch(`${url}${palavra}`)
        .then((resposta) => resposta.json())
        .then((data) => {
            console.log(data)
            resultado.innerHTML = 
                `<h3 id="palavra">${palavra }</h3>
                <p id="resultado"><span>1º</span>${data[0].meanings[0]}Lugar para se morar</p>
                <p id="resultado"><span>2º</span>${data[0].meanings[1]}Residência</p>`
            }).catch(() =>{
                resultado.innerHTML = `<p id="resultado"><span>Não</span> foi possivel encontrar essa palavra</p>`
            })
            
    }
});