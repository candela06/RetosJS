/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let c1 = "amor"
let c2 = "roma"

console.log(esAnagrama(c1,c2) ? "es un anagrama" : "no es un anagrama")

// probando las arrow function de paso q bronca leer documentación vscode dame las funciones con el puntito hdpppppppp !!!
function esAnagrama(cadena1, cadena2){
    cadena1.toLowerCase()
    cadena2.toLowerCase()

    if (cadena1 == cadena2) {
        return false
    } else {
        const laTengoGrande = (c) => c.toLowerCase().split("").sort().join()
        return laTengoGrande(cadena1) == laTengoGrande(cadena2)
    }
}

//me costó un huevo y eso q soy mina 