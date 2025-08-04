const priceOfPizza = (price) => {
    const prices = {
        Pepperoni: 7000,
        veggie: 100000,
        chickenSuya: 150000
    };
    
    let result = {};
    for (let key in price) {
        if(price[key] <= 0){
            price[key] = 0;
        }
        if (prices[key]) {
            result[key] = prices[key] * price[key];
        }
    }
    
    return result;
}

module.exports = priceOfPizza;