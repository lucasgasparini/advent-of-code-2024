const { countSafeReports } = require('./solution')

const EXAMPLE = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

test('example input returns 2 safe reports', () => {
	expect(countSafeReports(EXAMPLE)).toBe(2)
})
