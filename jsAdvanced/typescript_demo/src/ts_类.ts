class Person {
    // ts中属性需提前声明并指定类型；
    name: string;
    // 属性必须在声明时或构造函数里被初始化
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(msg: string): void {
        console.log(msg)
    }
}