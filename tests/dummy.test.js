// import { sumFunction } from "../utils/test_helper"
const { sumFunction } = require("../utils/test_helper")


test('test sumFunction, expected to pass', () => {
    const a = 5
    const b = 6
    const result = sumFunction(a, b)

    expect(result).toBe(11)
})

test('test sumFunction, expected to fail', () => {
    const a = 5
    const b = 6
    const result = sumFunction(a, b)

    expect(result).toBe(12)
})