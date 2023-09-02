let numero = parseInt(Math.random() * 1001)
let chute = document.querySelector("#chute") //chute
let button = document.querySelector("#button") // botão
let result = document.querySelector("#result")

button.addEventListener('click', ()=>{
    if(chute.value == numero){
        result.innerHTML = 'Acertou!'
        result.style.color = 'green'
    }
    else if(chute.value < numero){
        result.innerHTML = 'Errou...Numero maior...'
        result.style.color = 'yellow'
    
    }
    else if(chute.value > numero){
        result.innerHTML = 'Errou...Numero menor...'
        result.style.color = 'yellow'
        
    }
    else if(chute.value == null){
        result.innerHTML = 'Digite um numero'
        result.style.color = 'red'
    }
    
})