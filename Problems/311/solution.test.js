const peak = require("./solution");

describe('Find peak', () => {
    it("should return the peak of the vector", () => {
        expect(peak([1, 2, 3, 4, 10, 5, 6, 7, 8, 9], 0, 9)).toBe(10);
        expect(peak([1, 10, 2, 3, 4, 5, 6, 7, 8, 9], 0, 9)).toBe(10);
        expect(peak([1, 2, 3, 4, 5, 6, 10, 7, 8, 9], 0, 9)).toBe(10);
    });

    it("should return null because there is no peak", () => {
        expect(peak([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9)).toBe(null);
        expect(peak([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9)).toBe(null);
    });
})
