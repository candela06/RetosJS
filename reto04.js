/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 * 
 * - un numero primo es divisible por 1 y por él mismo
 * 
 */

function esPrimo(num){
    if (num < 2) return false
    else {
        for (let i=2; i<num; i++){
            if (num%i == 0) return false 
        }
        return true
    }
}

for (let i=1; i<=100; i++){
    if (esPrimo(i))
        console.log(`${i} es primo`)
    else
        console.log(`${i} no es primo`)
}

