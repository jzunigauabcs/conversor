const templateTemperature = function () {
	return `<option value="gc">Grado Celsius</option>
			<option value="gf">Grado Fahrenheit</option>`
}
const templateLongitude = function () {
	return `<option value="cm">Centímetros</option>
			<option value="mt">Metros</option>`
}

const swapIndex = function (i) {
	return i * -1 + 1
}

const swap = function (i) {
	let cbxMeasure = document.querySelectorAll('.cbxMeasure')
	let otherIndex = swapIndex(i)
	let otherValue = swapIndex(cbxMeasure[i].selectedIndex)
	cbxMeasure[otherIndex].selectedIndex = otherValue
}

const changeMeasure = function (i) {
	let cbxMeasure = document.querySelectorAll('.cbxMeasure')
	if (cbxMeasure[0].value == cbxMeasure[1].value)
		swap(i)
}

const executeCalc = function (value) {
	let cbxMeasure = document.querySelectorAll('.cbxMeasure')
	let functionName = `${cbxMeasure[0].value}To${cbxMeasure[1].value}`
	let fn = window[functionName]
	if(typeof fn === 'function') return fn()
	else return ''
}

const calc = function (i) {
	let result = document.querySelectorAll('.result')
	if(isNaN(result[i].value)){
		return
	} else {
		result[swapIndex(i)] = executeCalc(result[i].value)
	}
}

const convertion = function (option) {
	let cbxMeasure = document.querySelectorAll('.cbxMeasure')
	let template
	switch(parseInt(option)) {
		case 1:
			template = templateTemperature()
			break
		case 2:
			template =  templateLongitude()
			break
		default: 
			template =  ''
	}
	for(let i = 0;i < cbxMeasure.length; i++){
		cbxMeasure[i].innerHTML = template
		cbxMeasure[i].value = cbxMeasure[i].options[i].value
		cbxMeasure[i].onchange = changeMeasure.bind(this, i)
	}
	let functionName = `${cbxMeasure[0].value}To${cbxMeasure[1].value}`
	let result = window[functionName]()
}


const gFTogc = function (temperatura) {
	return 5 * (temperatura - 32) / 9
}

const gcTogf = function (temperatura) {
	return 9 * temperatura / 5 + 32
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














