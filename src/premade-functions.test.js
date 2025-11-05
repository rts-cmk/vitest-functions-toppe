import { describe, expect, it, vi } from "vitest";
import { findLongestWord, charCount, mergeSortedArrays, flattenArray, groupBy, debounce } from "./premade-functions.js";

describe("findLongestWord", () => {

    it("should recieve a string and return the longest word", () => {
        // TODO
        // expect(...)
        expect(findLongestWord("Programming with vitest is fun")).toBe("Programming")
    });

});

// Lav selv tests for de andre functions...
describe("charCount", () => {
    it("should receive a string and return an object with character as keys and their counts as values", () => {
        expect(charCount("programming")).toEqual({ p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 })
    })
})

describe("mergeSortedArrays", () => {
    it("should receive two sorted arrays and return 1 single sorted array", () => {
        expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]) 
    })
})

describe("flattenArray", () => {
    it("Should receive a nested array and return a flat array", () => {
        expect(flattenArray([1, [2, 3, [4], 5], 6])).toEqual([1, 2, 3, 4, 5, 6])
    })
})

describe("groupBy", () => {
    it("Should group an array of objects by a given property", () => {
        const data = [
            { category: 'fruit', name: 'apple' },
            { category: 'fruit', name: 'banana' },
            { category: 'vegetable', name: 'carrot'},
        ]

        expect(groupBy(data, 'category')).toEqual({
            fruit: [
                { category: 'fruit', name: 'apple' },
                { category: 'fruit', name: 'banana' },
            ],
            vegetable: [
                { category: 'vegetable', name: 'carrot' },
            ]
        })
    })
})


describe("debounce", () => {
    it("Should return a debounced version of the provided function", async () => {
        vi.useFakeTimers()
        const func = vi.fn()
        const debounced = debounce(func, 200)

        debounce()
        debounced()
        debounced()

        vi.advanceTimersByTime(199)
        expect(func).not.toHaveBeenCalled()

        vi.advanceTimersByTime(1)
        expect(func).toHaveBeenCalledTimes(1)

        vi.useRealTimers()
    })
})