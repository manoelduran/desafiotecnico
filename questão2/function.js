function contador (n){
    if (n < 1){
        return [];
    } else {
        let contadorArray = contador (n - 1);
        contadorArray.push(n);
        return contadorArray;
    }
}
console.log(contador(20));