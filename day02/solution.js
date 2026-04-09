const fs = require('fs')

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
	const reports = input
		.trim()
		.split('\n')
		.map((line) => line.trim().split(/\s+/).map(Number))

	return reports.filter(isSafe).length
}

const input = fs.readFileSync('input.txt', 'utf-8')
console.log('Safe reports:', countSafeReports(input))
