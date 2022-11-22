const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        for (const element of array) {
            if (arg === element) {
                const index = array.indexOf(element);
                array.splice(index, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
