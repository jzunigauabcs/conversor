//Global
const measure = {}

measure.prueba = function (temperatura) {
	alert(temperatura)
}

measure.gfTogc = function (temperatura) {
	return 5 * (temperatura - 32) / 9
}

measure.gcTogf = function (temperatura) {
	return 9 * temperatura / 5 + 32
}
measure.cmTomt = function (medida) {
	return medida / 100
}
measure.mtTocm = function (medida) {
	return medida * 100
}

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
	calculateMeasure(0)
})

//Inputs result
const getTbxResult = function (index) {
	let tbxResult = document.querySelectorAll('.result')
	return tbxResult[index]
}

const getTbxResultValue = function (index) {
	let input = getTbxResult(index)
	return input.value
}

const setTbxResultValue = function (index, value) {
	let input = getTbxResult(index)
	input.value = value
}

//Cbx measure
const getCbxMeasure = function (index) {
	let cbxMeasure = document.querySelectorAll('.cbxMeasure')
	return cbxMeasure[index]
}

const getCbxMeasureValue = function (index) {
	let input = getCbxMeasure(index)
	return input.value
}

const setCbxMeasureValue = function (index, value) {
	let input = getCbxMeasure(index)
	input.value = value
}


//Templates
const templateTemperature = function () {
	return `<option value="gc">Grados Celsius</option>
			<option value="gf">Grados Fahrenheit</option>`
}

const templateLongitude = function () {
	return `<option value="cm">Centímetros</option>
			<option value="mt">Metros</option>`
}

//Helper
const swapIndex = function (i) {
	return i * -1 + 1
}

const swapCbxMeasure = function (index) {
	let swap = swapIndex(index)
	let cbxMeasure = getCbxMeasure(swap)

	setCbxMeasureValue(swap, cbxMeasure.options[swapIndex(cbxMeasure.selectedIndex)].value)
}

const choiceFuncCalc = function (index) {
	return `${getCbxMeasure(index).value}To${getCbxMeasure(swapIndex(index)).value}`
}

const generateFuncCalc = function (index) {
	let functionName = choiceFuncCalc(index)
	if(typeof measure[functionName] === 'function') 
		return measure[functionName]
}

const cbxCalc = function (index) {
	if(checkEqualsMeasure())
		swapCbxMeasure(index)
	calculateMeasure(index)
}

const checkEqualsMeasure = function () {
	return getCbxMeasureValue(0) === getCbxMeasureValue(1)
}

const tbxCalc = function (index) {
	calculateMeasure(index)
}

const calculateMeasure = function (index) {
	let measureF = generateFuncCalc(index)
	let value = getTbxResultValue(index)
	if(value.trim().length  === 0 || isNaN(value))
		return
	let result = calc(value, measureF)
	showResult(index, result)
}

const showResult = function (index, value) {
	let resultInput = getTbxResult(swapIndex(index))
	resultInput.value = value
}

const calc = function (value, f) {
	return parseFloat(f(value).toFixed(4))
}

/********************************Danger Zone***********************************************/
