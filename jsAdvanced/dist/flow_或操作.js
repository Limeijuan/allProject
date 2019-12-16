//或操作
let a = 234;
a = '23'; //ok
a = true; //error

//类型推断
function test(a, b) {
    return a + b;
}
let c = test(1, 2); //error,推断函数返回number类型，与string不匹配；