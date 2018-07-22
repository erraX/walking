// 布尔值
const isDone: boolean = true;

// 数字
const num: number = 1;

// 字符串
const str: string = 'This is string';

// 数组
const arr: number[] = [1, 2, 3];

// 枚举
enum Color {Red, Green, Blue}
const color: Color = Color.Green;

// 任何类型
let variable: any = 4;
variable = 'str';
variable = false;


// 定义函数
function add(x: number, y: number): number {
    return x + y;
}

// 定义接口
interface PersonInfo {
    name: string;
    age: number;
}

// 定义类
class Person {
    static nationality: string = 'black';
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    public sayName() {
        return 'My name is: ' + this.name;
    }
}

// 泛型
function hello<T>(arg: T): T {
    return arg;
}

// helloStr 是 `string` 类型
let helloStr = hello<string>('Hello Generic');
