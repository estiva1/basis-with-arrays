const reverse = (array) => {
    let arrN = [];
    for (let i = array.length; i--;) {
        arrN.push(array[i]);
    }
    return arrN;
}
   
const data = [11, 234, 3];
console.log(reverse(data));