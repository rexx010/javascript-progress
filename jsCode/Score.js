const get_score = function(an_array){
    new_array = [];
    for (let count = 0; count < an_array.length; count++) {
        if (an_array[count] >= 50) {
            new_array.push(an_array[count]);
        }
    }
    return new_array;
}

console.log(get_score([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));