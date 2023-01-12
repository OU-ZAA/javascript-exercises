const palindromes = function (string) {
    const reverseStr = string.toLowerCase()
                             .split("")
                             .filter((letter) => (letter !== "!" && letter !== " " && letter !== "," && letter !== "."))
                             .reverse()
                             .join("")
                             
    const str = string.toLowerCase()
                      .split("")
                      .filter((letter) => (letter !== "!" && letter !== " " && letter !== "," && letter !== "."))
                      .join("")
    return reverseStr === str
};

// Do not edit below this line
module.exports = palindromes;
