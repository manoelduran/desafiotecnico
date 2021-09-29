function bubbleSort(b) {
    var shouldSort = true;
    var length = b.length;
    while(shouldSort) {
    shouldSort = false;
    length--;
    for (var i = 0; i < length; i++) {
    var a = b[i];
    if ( a > b[i+1]) {
    b[i] = b[i+1];
    b[i+1] = a;
    shouldSort = true;
    }
    }
}
 }
 var ar = [5, 7, 0, 0.1, [4, 7, 9, 0],1, 2, [90, 9, 7, 3],9.7];
 var b = ar.flat(Infinity)
console.log(b);
bubbleSort(b);
console.log(b);
var V = b.filter((repetido, number) => b.indexOf(repetido) === number)
console.log(V)
