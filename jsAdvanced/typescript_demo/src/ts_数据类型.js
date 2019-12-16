//布尔值
var isb = false;
//数字, 和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。
var nums = 3;
var num2 = NaN;
var num3 = Infinity;
var num4 = 0xf00db; //十六进制：0x开头，取值范围：0-9，a-f; 任意位数；
var num5 = 681; //二进制： 0b开头，取值范围：0 1， Binary
var num6 = 501; //八进制：0o开头，取值范围：0-7； Octal
//字符串
var str = 'hahah';
var str2 = 'Hello ${ str }'; //可以使用模板字符串
//数组
var arr = [1, 2];
var arr2 = [2, 3];
//元组 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
var ta;
ta = [3, '2']; //ok；
// ta = ['2',3]; //error;
console.log(ta[0]); //3;
// ta[2] = 'ddsa' // OK, 字符串可以赋值给(string | number)类型
//void void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void; 你只能为它赋予undefined和null
var vaaa = undefined;
var u = undefined;
var n = null;
//any 任意类型
var abc = 4;
abc = '555';
abc = true;
//never never类型表示的是那些永不存在的值的类型。never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型,变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
//never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
function test() {
    while (true) {
    }
}
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
