const fileSystem = require('fs')
const path = require('path')

function canProduceTarget(target, numbers) {
	if (numbers.length === 1) return numbers[0] === target

	function evaluate(index, current) {
		if (index === numbers.length) return current === target
		if (current > target) return false // Pruning: values only grow

		const next = numbers[index]
		const concatenated = Number(`${current}${next}`)

		return (
			evaluate(index + 1, current + next) ||
			evaluate(index + 1, current * next) ||
			evaluate(index + 1, concatenated) // Now checking for the extra operator, the only difference :)
		)
	}

	return evaluate(1, numbers[0])
}

function getTotalCalibrationsSum(input) {
	const lines = input.trim().split('\n')
	let totalCalibrationResult = 0

	for (const line of lines) {
		if (!line.trim()) continue
		const [testPart, numbersPart] = line.split(':')
		const target = parseInt(testPart.trim(), 10)
		const numbers = numbersPart.trim().split(' ').map(Number)

		if (canProduceTarget(target, numbers)) {
			totalCalibrationResult += target
		}
	}

	return totalCalibrationResult
}

// Startup: node day07/part2/solution.js
if (require.main === module) {
	const inputFile = process.argv[2] || 'day07/input.txt'
	const input = fileSystem.readFileSync(path.resolve(inputFile), 'utf-8')
	console.log('Total Calibration Sum:', getTotalCalibrationsSum(input))
}

module.exports = { getTotalCalibrationsSum, canProduceTarget }
