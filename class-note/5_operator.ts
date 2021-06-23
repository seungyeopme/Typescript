// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var sy: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer1 {
    name: string;
    skill: string;
}
interface Person1 {
    name: string;
    age: number;
}
function askSomeone(someone: Developer1 | Person1) {
    someone.name;
    someone.skill;
    someone.age;
}