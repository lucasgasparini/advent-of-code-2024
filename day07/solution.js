const fileSystem = require('fs')
const path = require('path')

function canProduceTarget(targetValue, numbers) {
	if (numbers.length === 1) return numbers[0] === targetValue

	function evaluate(index, currentValue) {
		if (index === numbers.length) {
			return currentValue === targetValue
		}
		if (currentValue > targetValue) {
			return false
		}

		const next = numbers[index]
		return (
			evaluate(index + 1, currentValue + next) ||
			evaluate(index + 1, currentValue * next)
		)
	}

	return evaluate(1, numbers[0])
}

function getTotalCalibrationsSum(input) {
	const lines = input.trim().split('\n')
	let totalCalibrationResult = 0

	for (const line of lines) {
		const [testPart, numbersPart] = line.split(':')
		const target = parseInt(testPart.trim(), 10)
		const numbers = numbersPart.trim().split(' ').map(Number)

		if (canProduceTarget(target, numbers)) {
			totalCalibrationResult += target
		}
	}

	return totalCalibrationResult
}

// Startup: node day07/solution.js
if (require.main === module) {
	const inputFile = process.argv[2] || 'day07/input.txt'
	const input = fileSystem.readFileSync(path.resolve(inputFile), 'utf-8')
	console.log('Total Calibration Sum:', getTotalCalibrationsSum(input))
}

module.exports = { getTotalCalibrationsSum, canProduceTarget }
