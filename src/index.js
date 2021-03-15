module.exports = function reverse (n) {
    let reversed = n.toString().split('').reverse().join('');
    let madeNumber = parseInt(reversed);
    
    return madeNumber;
}
