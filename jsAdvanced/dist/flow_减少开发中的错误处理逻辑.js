
/**
 * 功能：传递一个数字数组，计算数组中所有数字的和并返回结果；
 */
// function sum(arr) {
//     //是否有参数传入
//     if(!arr) {
//         throw new Error('此函数需要传递一个数组作为参数')
//     }
//     //传入参数是否是数组
//     if(!Array.isArray(arr)) {
//         throw new Error('此函数需要传递一个数组参数')
//     }
//     //传入参数是否是数字数组
//     if(!arr.every(v => typeof v === 'number')) {
//         throw new Error('此函数需要传递一个数组作为参数,数组中的元素需要全部为数字')
//     }

//     let result = 0;
//     arr.forEach(v => {
//         result += v;
//     })
//     return result;
// }
function sum(arr) {
    let result = 0;
    arr.forEach(v => {
        result += v;
    });
    return result;
}
// sum([2,'3']);