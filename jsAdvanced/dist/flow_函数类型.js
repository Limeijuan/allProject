function test(a, b) {
    return a + b;
}

// let d: string = test(1, 2);

//可以将变量声明为函数类型
//也就意味着我们可以指定为变量赋值的函数的类型
let func = test;
function ajc(callback) {}
ajc(function (obj) {});