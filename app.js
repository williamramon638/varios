//#1: Pedir 2 números al usuario y sumarlos, restarlos, multiplicarlos y dividirlos. 
/*
let num1,num2; 

num1= +prompt("Digite un numero");
num2= +prompt("Digite otro numero");

console.log(` ${num1} + ${num2} = ${num1+num2}`);
console.log(` ${num1} - ${num2} = ${num1-num2}`);
console.log(` ${num1} * ${num2} = ${num1*num2}`);
console.log(` ${num1} / ${num2} = ${num1/num2}`);
*/

//#2 Convertir Grados Celsius a Grados Fahrenheit. 
/*
let cels;
cels = +prompt("Digite los grados celsius");
console.log(`${cels} °Celsius equivalen a ${(cels*1.8)+32} ° Farenheit`);
*/

// #3 Sacar la hipotenusa de un triángulo rectángulo, pidiendo al usuario el valor de los 2 catetos. 

/*
var cat1,cat2,hip;

cat1 = +prompt ("Digite el valor del cateto 1");
cat2 = +prompt ("Digite el valor del cateto 2");
console.log(`El valor de la hipotenusa es: ${Math.sqrt((cat1**2) + (cat2**2))}`);
*/

// #4 PHacer un Programa que calcule longitudes de Circunferencia. 
/*
let diam;

diam = +prompt("Digite el diametro de la circuferencia");
console.log(`La longitud de la Circuferencia es: ${Math.PI*diam}`);
*/

// #5 Hacer un Programa que calcule áreas de trapecios. 

/*
let base_mayor,base_menor,altura;

base_mayor = +prompt("Digite la base mayor del trapecio");
base_menor = +prompt("Digite la base menor del trapecio");
altura = +prompt("Digite la altura del trapecio");

console.log(`El área del trapecio es: ${((base_mayor+base_menor)*altura)/2} cm2`);
*/

// #6 Calcule la media aritmética de 3 números cualesquiera. 
/*
let num1,num2,num3;

num1 = +prompt ("Digite el valor del primer numero");
num2 = +prompt ("Digite el valor del segundo numero");
num3 = +prompt ("Digite el valor del tercer numero");

console.log(`La media de los numeros es ${(num1+num2+num3)/3}`);
*/


// #7 Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra. 
/*
let total_compra,porcentaje_descuento;
porcentaje_descuento=1-0.15; 
total_compra = +prompt("Digite el valor total de su compra");
console.log(`El valor total de su compra con descuento es: $${total_compra*porcentaje_descuento}`);
*/

// #8 Dadas las horas trabajadas de una persona y el valor por hora. Calcular su salario e imprimirlo.  
/*
let cantidad_horas,valor_hora;

cantidad_horas = +prompt("Digite el valor total de las horas que trabajó");
valor_hora = +prompt ("Digite el valor que le pagan por hora");

console.log(`Su salario de ${cantidad_horas} horas por un precio de ${valor_hora}/hora equivale a $${cantidad_horas*valor_hora}`);
*/

// #9 Calcular el nuevo salario de un obrero, si obtuvo un incremento del 25% sobre su salario anterior.
/*
let salario,incremento=1+0.25;

salario = +prompt("Digite su salario anterior");
console.log(`Su salario nuevo con el incremento del 25% sobre el salario anterior será de: $${salario*incremento}`);
*/

// #10: Comprobar a través de un programa si un alumno aprobó o no un examen (Aprueba si su nota es mayor a 10.5).
/*
let nota;

nota = +prompt("Digite la nota de su examen");
if(nota>10.5){
    console.log("Usted ha aprobado el examen");
}else{
    console.log("Usted ha reprobado el examen");
}
*/

// #11: Comprobar si un número digitado por el usuario es positivo o negativo.
/*
let numero;

numero = +prompt("Digite un numero");
if (numero>0){
    console.log(`El numero ${numero} es positivo`);
}else{
    if(numero==0){
        console.log(`El numero ${numero} es neutro`);
    }else{
        console.log(`El numero ${numero} es negativo`);
    }
    
}
*/
// #12: Visualizar la tarifa de la luz según el gasto de corriente eléctrica. Para un gasto  menor de 1.000Kwxh la tarifa es 1.2, entre 1.OOO y 1.850Kwxh es 1.0 y mayor de  1.85OKwxh 0.9.
/*
let gasto_energia,tarifa;
gasto_energia = +prompt("Digite su gasto energetico en Kwxh");

if(gasto_energia<1000){
    tarifa=1.2;
    console.log(`El valor a pagar de su factura según la tarifa que le aplica de ${tarifa}/Kwxh es de: $${gasto_energia*tarifa}`);
}else{
    if (gasto_energia>=1000 && gasto_energia<=1850) {
        tarifa=1;
        console.log(`El valor a pagar de su factura según la tarifa que le aplica de ${tarifa}/Kwxh es de: $${gasto_energia*tarifa}`);
    } else {
        tarifa=0.9;
        console.log(`El valor a pagar de su factura según la tarifa que le aplica de ${tarifa}/Kwxh es de: $${gasto_energia*tarifa}`);
    }
}
*/
//#13 Determinar si un número es par, impar.
/*
let numero;
numero = +prompt("Digite un numero");
if(numero%2==0){
    console.log ("El numero es par");
}else{
    console.log ("El numero es impar");
}
*/

//#14 Calcular el mayor de dos números leídos del teclado y visualizarlo en pantalla.
/*
let num1,num2;

num1 = +prompt("Digite un numero");
num2 =  +prompt("Digite otro numero");


console.log (`El número ${num1} es ${num1>num2 ? 'mayor que' : num1<num2? 'menor que': 'igual que'} ${num2}`);  
*/

/* #15 Ingrese un número y calcule e imprima su raíz cuadrada. Si el número es negativo  
imprima el número y un mensaje que diga “tiene raíz imaginaria”.*/
/*
let numero;
numero = +prompt("Digite un numero");
while(isNaN(numero)){
    alert('El número ingresado es invalido.')
    numero = +prompt("Digite un numero");
}
console.log(`La raiz cuadrada del numero ${numero} es ${numero<0 ? 'imaginaria': Math.sqrt(numero)}` );
*/

/* #16 Ingresar por teclado el nombre y el signo de cualquier 
persona e imprima, el nombre sólo si la persona es signo Aries, 
caso contrario imprima no es signo Aries.

*/
/*
let nombre, signo;

nombre = prompt("Escriba su nombre");
signo = prompt("Escriba su signo");

console.log(`${signo.toLowerCase() == "aries"? nombre:'Su signo no es aries'}`);

*/

/*
#17 Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e 
imprima, solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona.

*/
/*
let nombre,edad,sexo;

nombre= prompt("Digite su nombre");
edad= +prompt("Digite su edad");
sexo= +prompt("Digite 1 o 2 según corresponda su sexo \n 1. Masculino \n 2. Femenino");

while(isNaN(edad)){
    alert('El número ingresado es invalido.')
    edad= +prompt("Digite su edad");
}

while(isNaN(sexo)){
    alert('El número ingresado es invalido.')
    sexo= +prompt("Digite 1 o 2 según corresponda su sexo \n 1. Masculino \n 2. Femenino");
}

console.log(`${edad>=18 && sexo==1? nombre:''}`);
*/

/* #18 Una distribuidora de motocicletas tiene una promoción de fin de año qué consiste en lo siguiente.
 Las motos marca Honda tienen un descuento del 5%, las marcas Yamaha del 8% y las Suzuki del 10%, 
 las otras marcas 2% 

*/
/*
let marca,valor;

marca = prompt ("Escriba el nombre de la marca de su moto para verificar si aplica a la promoción de nuestra distribuidora");
console.log(`${marca.toLocaleLowerCase()=="honda"? 'Usted aplica al descuento del 5% ' : marca.toLocaleLowerCase()=="yamaha"? 'Usted aplica al descuento del 8% ' : marca.toLocaleLowerCase()=="suzuki"? 'Usted aplica al descuento del 10% ':'No hay descuentos para aplicar a la marca que menciona '}`);
*/