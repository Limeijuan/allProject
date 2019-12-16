//@flow
//number类型
//number类型可以赋值的内容为：数字，NaN, Infinity
let a: number = 100;
let b: number = NaN;
let c: number  = Infinity;

//string类型
//number类型可以赋值的内容为：字符串
let str1: string = '12334'

//boolean 布尔类型
//void  javascript中的undefined
//null js中的null

//Array 类型
//在声明数据为数组类型的时候，我们需要为数组制定元素的类型
let arr: Array<number> = [1,2,3];

//any  任意类型
let name: any = 123;
name = "123";
let arr2: Array<any> = [1,2,'3']

//Object 对象类型
//Function 函数类型
