// max.js
// 取得陣列中的最大值
export function max(array){
    var max = array[0];
    for(var i=0 ; i<array.length ; i++){
        max = array[i] > max ? array[i] : max;
    }
    return max;
}