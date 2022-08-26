/*
Ejercicio 3

Agregar un método palindrome a los strings de JavaScript que retorne true si el string es un palíndrome, o false de lo contrario.

El método se va a utilizar de la siguiente forma:

"anita lava la tina".palindrome() // true
"prueba".palindrome() // false
*/
//El ejercicio se resuelve en parejas, en un repositorio. La entrega la hacen los dos y es el link al repositorio

String.prototype.checkPalindrome = function () {
    str = this;
    let string = str.replaceAll(" ","")
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return console.log("false");
        }
    }
    return console.log("true");
};


"anita lava la tina".checkPalindrome()
"hola".checkPalindrome()