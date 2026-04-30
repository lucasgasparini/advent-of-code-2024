const { getTotalCalibrationsSum, canProduceTarget } = require('./solution')

const EXAMPLE = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`

describe('canProduceTarget', () => {
	test('190 = 10 * 19', () => {
		expect(canProduceTarget(190, [10, 19])).toBe(true)
	})

	test('3267 = 81 + 40 * 27 or 81 * 40 + 27', () => {
		expect(canProduceTarget(3267, [81, 40, 27])).toBe(true)
	})

	test('83: 17 5 cannot be solved', () => {
		expect(canProduceTarget(83, [17, 5])).toBe(false)
	})

	test('156: 15 6 cannot be solved with + and * only', () => {
		expect(canProduceTarget(156, [15, 6])).toBe(false)
	})

	test('7290: 6 8 6 15 cannot be solved with + and * only', () => {
		expect(canProduceTarget(7290, [6, 8, 6, 15])).toBe(false)
	})

	test('161011: 16 10 13 cannot be solved', () => {
		expect(canProduceTarget(161011, [16, 10, 13])).toBe(false)
	})

	test('192: 17 8 14 cannot be solved with + and * only', () => {
		expect(canProduceTarget(192, [17, 8, 14])).toBe(false)
	})

	test('21037: 9 7 18 13 cannot be solved', () => {
		expect(canProduceTarget(21037, [9, 7, 18, 13])).toBe(false)
	})

	test('292 = 11 + 6 * 16 + 20', () => {
		expect(canProduceTarget(292, [11, 6, 16, 20])).toBe(true)
	})

	test('single number matching target', () => {
		expect(canProduceTarget(42, [42])).toBe(true)
	})

	test('single number not matching target', () => {
		expect(canProduceTarget(42, [7])).toBe(false)
	})
})

describe('solve', () => {
	test('returns 3749 for the example input', () => {
		expect(getTotalCalibrationsSum(EXAMPLE)).toBe(3749)
	})

	test('returns 0 for input with no valid equations', () => {
		const input = `83: 17 5\n21037: 9 7 18 13`
		expect(getTotalCalibrationsSum(input)).toBe(0)
	})

	test('returns the correct sum for a single valid equation', () => {
		expect(getTotalCalibrationsSum('190: 10 19')).toBe(190)
	})

	test('handles multiple valid equations summing correctly', () => {
		// 190 + 3267 + 292 = 3749
		const input = `190: 10 19\n3267: 81 40 27\n292: 11 6 16 20`
		expect(getTotalCalibrationsSum(input)).toBe(3749)
	})
})
