class Animal {
    age: number;
    constructor(age: number) {
        this.age = age;
    }

    eat() {
        console.log("想吃大鸡腿儿")
    }
}

class Dog extends Animal {
    type: string;
    constructor(type:string, age:number) {
        super(age);
        this.type = type
    };
    eat() {
        console.log('chi')
    }
}
let dog = new Dog("博美",12)
