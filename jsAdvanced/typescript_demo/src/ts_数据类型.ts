//布尔值
let isb: boolean = false;

//数字, 和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。
let nums: number = 3;
let num2: number = NaN;
let num3: number = Infinity;
let num4: number = 0xf00db;  //十六进制：0x开头，取值范围：0-9，a-f; 任意位数；
let num5: number = 0b1010101001; //二进制： 0b开头，取值范围：0 1， Binary
let num6: number = 0o765; //八进制：0o开头，取值范围：0-7； Octal

//字符串
let str: string = 'hahah';
let str2: string = 'Hello ${ str }' //可以使用模板字符串

//数组
let arr: Array<number> = [1,2];
let arr2: number[] = [2,3];

//元组 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let ta: [number, string];
ta = [3,'2']; //ok；
// ta = ['2',3]; //error;
console.log(ta[0]) //3;
ta[2] = 'ddsa' //error

//void void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void; 你只能为它赋予undefined和null
let vaaa: void = undefined;

let u: undefined = undefined;
let n: null = null;

//any 任意类型
let abc:any = 4;
abc ='555';
abc = true;

//never never类型表示的是那些永不存在的值的类型。never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型,变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
//never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
function test():never {
    while(true) {

    }
}
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2