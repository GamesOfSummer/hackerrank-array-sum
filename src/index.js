var sockMerchant = function (numberOfSocks, array) {
    var pair = 0;
    array.sort();
    for (var i = 1; i < numberOfSocks; i++) {
        if (array[i - 1] === array[i]) {
            pair++;
            i++;
        }
    }
    return pair;
};
var result = sockMerchant(3, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(result);
