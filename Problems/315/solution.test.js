const Toeplitz = require("./solution");

describe('is Toeplitz', () => {
    it("should be toeplitz", () => {
        expect(Toeplitz([
            [1,2,3,4,8],
            [5,1,2,3,4],
            [6,5,1,2,3],
            [7,6,5,1,2]
        ])).toBe(true);
    });

})
