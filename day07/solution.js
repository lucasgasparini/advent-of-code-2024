const fs = require('fs')
const path = require('path')

function isOperationValid(lines) {}

function countValidOperationsSum(input) {}

if (require.main === module) {
	const inputFile = process.argv[2] || 'day07/input.txt'
	const input = fs.readFileSync(path.resolve(inputFile), 'utf-8')
	console.log('Valid Operations Sum:') //TODO
}

module.exports = { isOperationValid, countValidOperationsSum }
