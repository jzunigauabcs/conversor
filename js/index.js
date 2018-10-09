/*const numero1 = prompt("Introduce el número 1")
const numero2 = prompt("Introduce el número 2")
const numero3 = prompt("Introduce el número 3")

let mayor = 0
let menor = 0

if(numero1 === numero2 && numero1 === numero3)
	console.log('Los números son iguales')
else {
	if(numero1 >= numero2 && numero1 >= numero3) {
		mayor = numero1
	} else if(numero2 >= numero1 && numero2 >= numero3)  {
		mayor = numero2
	} else if(numero3 >= numero1 && numero3 >= numero2)  {
		mayor = numero3
	}

	if(numero1 <= numero2 && numero1 <= numero3) {
		menor = numero1
	} else if(numero2 <= numero1 && numero2 <= numero3)  {
		menor = numero2
	} else if(numero3 <= numero1 && numero3 <= numero2)  {
		menor = numero3
	}
	console.log('Número mayor: ' +  mayor)
	console.log('Número menor: ' +  menor)
}
*/

//const limite = prompt('Introduce el valor límite')
/*for(let i = 0; i < limite; i++) {
	console.log(i)
}*/
	/*let i = 0
	while(i < limite) {
		console.log(i)
		i++
	}*/
/*	
let found = false
let attempt = 0
const limit = 3
let input
const random = Math.floor(Math.random() * (10 - 1)) + 1
console.log(random)
while (attempt++ < limit && !found) {
	input = prompt("Intrdouce el número a adivinar")
	if(input == random)
		found = true
}
if (found)
	document.write('<h2 style="color: green">Número encontrado</h2')
else 
	document.write('<h2 style="color: red">Número no encontrado</h2')
*/

let cadena = 'Hola'
/*for(let i = cadena.length - 1; i >= 0; i--) {
	console.log(cadena.charAt(i))
}*/

//console.log(cadena.split('').reverse().join(''))

// función declarativa
/*

let name = "María"
console.log(saludo(name))

function saludo(nombre) {
	console.log(`Hola ${nombre}`)
}


const saludo2 = function (nombre) {
	return `Hola ${nombre}`
}
console.log(saludo2(name))

const saludo3 = (nombre, edad) => {
	return `Hola ${nombre} tu edad es ${edad} años`
}
console.log(saludo3('Juan', 30))


function reverseName(name) {
	return name.split('').reverse().join('')
}
/*
'ana' => true
'oso' => true
'oro' => true
'perro' => false
'anita lava latina' => true

let palindromo = "perro"
function isPalindromo (word) {
	let reverse = word.replace(/\s/g,'').split('').reverse().join('')
	return word.replace(/\s/g,'') === reverse
}

if(isPalindromo(palindromo)) {
	console.log(`La palabra ${palindromo} es palíndromo`)
} else {
	console.log(`La palabra ${palindromo} no es palíndromo`)
}

*/

const result = document.getElementById('result')

const convertFtoC = function (temperatura) {
	result.innerText = 5 * (temperatura - 32) / 9
}

const convertCtoF = function (temperatura) {
	result.innerText = 9 * temperatura / 5 + 32
}

const calcTemp = function (option) {
	let temperatura = document.getElementById('temperatura').value
	switch(parseInt(option)) {
		case 1:
			convertFtoC(temperatura)
			break
		case 2:
			convertCtoF(temperatura)
			break
		default:
			alert('Opción incorrecta')
	}
}














