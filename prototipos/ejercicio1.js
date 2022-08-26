/*Ejercicios de prototipos top 24
Due Aug 27, 2022
Ejercicio 1

Crea una función constructora llamada Persona que reciba 3 argumentos e inicialice un objeto con 3 propiedades: nombre, peso y altura.

Agrega dos métodos a la función constructora Persona: saludar y bmi.

saludar debe recibir un nombre y retornar el string "Hola , me llamo " donde es el argumento que se recibe y es la propiedad nombre del objeto.

bmi no recibe ningún argumento y retorna el índice de masa corporal que se calcula con la siguiente fórmula:

peso / altura^2

Un ejemplo de cómo invocaríamos los métodos:

const pedro = new Persona("Pedro", 72, 1.5);
pedro.saludar("Maria"); // "Hola Maria, me llamo Pedro"
pedro.bmi(); // 32
*/

function Person(name,weight,height){
 //   console.log("person constructo")
    this.name = name
    this.weight = weight
    this.height = Number.parseFloat(height);
    this.greet =(who) => {
        return `Hola ${who}, me llamo ${this.name}.` 
    };
    this.bmi =() => {
        let bmi = (weight / ((height * height) )).toFixed(2)
        return bmi
    };
}
    
    const Pedro = new Person("Pedro Infante",80,1.8)

    console.log("greet:", Pedro.greet("Camila"))
    console.log("bmi:",Pedro.bmi())
