var word = "Hello";
var count;
console.log(Stringcounter(word));
function Stringcounter(letters) {
    var count = letters.length;
    return count;
}
function spaceStringcounter(letters) {
    var count = word.replace("", "").length;
    return count;
}
