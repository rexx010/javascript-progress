// const clean_array = function(listFromUsers) {
//     new_array = [];
//     for (let count = 0; count < listFromUsers.length; count++) {
//         if (listFromUsers[count] > 0 && listFromUsers[count] < 6) {
//             new_array.push(listFromUsers[count]);
//         }
//     }
//     return new_array;
// }
// console.log(clean_array([1, 4, 2, 7, 4, 5, 0, 7, 3, 9, 1]));



const cleaning_array = function(listFromUsers) {
    for (let count = 0; count < listFromUsers.length; count++) {
        if (listFromUsers[count] < 1 || listFromUsers[count] > 5) {
            listFromUsers.splice(count, 1);
            count--;
        }
    }
    return listFromUsers;
}
console.log(cleaning_array([1, 4, 2, 7, 4, 5, 0, 7, 3, 9, 1, 4]));