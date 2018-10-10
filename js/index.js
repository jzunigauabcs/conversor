const conversor = document.querySelector('#conversor')

conversor.addEventListener('change', () => {
	let cbxMeasures = document.querySelectorAll('.cbxMeasure')
	let template
	switch(parseInt(conversor.value)) {
		case 1:
			template = templateTemperature()
			break;
		case 2:
			template = templateLongitude()
			break;
		default:
			template = ''
	}
	for(let i = 0; i < cbxMeasures.length; i++) {
		cbxMeasures[i].innerHTML = template
		cbxMeasures[i].value = cbxMeasures[i].options[i].value
	}
})

const templateTemperature = function () {
	return `<option value="gc">Grados Celsius</option>
			<option value="gf">Grados Fahrenheit</option>`
}

const templateLongitude = function () {
	return `<option value="cm">Centímetros</option>
			<option value="mt">Metros</option>`
}

const calc = function (e) {
	let cbxMeasures = document.querySelectorAll('.cbxMeasure')
	let selectedFunction = `${cbxMeasures[0].value}To${cbxMeasures[1].value}`
	let result = ''
	switch(selectedFunction) {
		case 'gfTogc':
			result = gfTogc(parseFloat(e.value))
			break;
		case 'gcTogf':
			result = gcTogf(parseFloat(e.value))
	}
	let valor2 = document.querySelectorAll('.result')
	valor2[1].value = result
}

const gfTogc = function (temperatura) {
	return 5 * (temperatura - 32) / 9
}

const gcTogf = function (temperatura) {
	return 9 * temperatura / 5 + 32
}