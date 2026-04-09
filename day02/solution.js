const fs = require('fs')
const path = require('path')

function isSafe(levels) {
	const diffs = []
	for (let i = 1; i < levels.length; i++) {
		diffs.push(levels[i] - levels[i - 1])
	}
	const allIncreasing = diffs.every((d) => d >= 1 && d <= 3)
	const allDecreasing = diffs.every((d) => d >= -3 && d <= -1)
	return allIncreasing || allDecreasing
}

function countSafeReports(input) {
	return input
		.trim()
		.split('\n')
		.map((line) => line.trim().split(/\s+/).map(Number))
		.filter(isSafe).length
}

if (require.main === module) {
	const inputFile = process.argv[2] || 'day02/input.txt'
	const input = fs.readFileSync(path.resolve(inputFile), 'utf-8')
	console.log('Safe reports:', countSafeReports(input))
}

module.exports = { isSafe, countSafeReports }
