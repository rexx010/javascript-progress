const priceOfPizza = require("./PriceOfPizza");

test("that the price of pizza is calculated", () => {
    const priceOfPiz = {Pepperoni: 2, veggie: 1, chickenSuya: 1};
    const result = priceOfPizza(priceOfPiz);
    expect(result).toEqual({Pepperoni: 14000, veggie: 100000, chickenSuya: 150000});
})
test("that the price of pizza returns 0 for negative quantities", () => {
    const priceOfPiz = {Pepperoni: 2, veggie: -1, chickenSuya: 2};
    const result = priceOfPizza(priceOfPiz);
    expect(result).toEqual({Pepperoni: 14000, veggie: 0, chickenSuya: 300000});
})