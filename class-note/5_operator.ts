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

// function askSomeone(someone: Developer1 | Person1) {
//     // someone.name;
//     // someone.skill;
//     // someone.age;
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({ name: '보스', age: 100});

function askSomeone(someone: Developer1 & Person1) {
    someone.name;
    someone.skill;
    someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 });
// askSomeone({ name: '보스', age: 100});

// var sy: string | number | boolean;
// var boss: string & number & boolean;
