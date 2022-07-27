const findMinBroadcastRange = require("./solution");

describe('Find Min Broadcast Range', () => {
    it("should return the minimum distance required", () => {
        expect(findMinBroadcastRange([1, 5, 11, 20],
            [4, 8, 15])).toBe(5);

        expect(findMinBroadcastRange([1, 5, 11, 20,1000],
            [4, 8, 15])).toBe(985);

        expect(findMinBroadcastRange([1, 5, 11, 20, 1000],
            [4, 8, 15,800])).toBe(200);
    });
})
