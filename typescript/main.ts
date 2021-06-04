export {};
let message = "welcome back";
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "abc";

let sentence: string = `my name is ${name}
I am beginner`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["Chris", 22]; //tuple

enum Color {
  Red = 5,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 20;
randomValue = true;
randomValue = "abcd";

let multiType: number | boolean;
multiType = 20;
multiType = true;

// ? optional parameter
// = default parameter
function add(num1: number, num2: number, num3: number = 10): number {
  if (num3) return num1 + num2 + num3;
  else return num1 + num2;
}

console.log(add(5, 10, 6));

interface Person {
  firstName: string;
  lastName?: string; //? means optional
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Bruce",
  lastName: "Wayne",
};

fullName(p);

//classes and access modifiers
//by default public

class Employee {
  public employeeName: string;
  //private employeeName: string;
  //protected employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Vishwas"); //new instatnce of class Employee
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName); //call base class constructor
  }
  delegateWork() {
    console.log(`Manager Delegate tasks`);
  }
}

let man1 = new Manager("Bruce");
man1.delegateWork();
man1.greet();
console.log(man1.employeeName);
