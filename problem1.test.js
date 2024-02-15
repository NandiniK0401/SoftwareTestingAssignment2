const totalCost = require('./problem1');

describe("This test will calculate the total cost", ()=>{
    test("Accepts 2 parameters as delivery cost and records cost with tax", ()=>{
        expect(totalCost(5, 10)).toBe(15);
    })
})