var fizzbuzz = Number(prompt ("FizzBuzz uchun son kiriting"))
var eltitle = document.querySelector('#title')

function FizzBuzz(shart){
    let respomnse = ""
    if (shart % 3 == 0 && shart % 5 == 0){
        respomnse = `FizzBuzz`
    }
    else if (shart % 3 == 0){
        respomnse = `Fizz`
    }
    else if ( shart % 5 == 0){
       respomnse = `Buzz`
       
    }
    else {
        respomnse = shart
    }
    eltitle.textContent = respomnse
    return respomnse
}

console.log(FizzBuzz(fizzbuzz))





