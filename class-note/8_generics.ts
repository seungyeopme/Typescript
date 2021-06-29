// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위 값 true

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num)
//     return num;
// }


// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// logText(10);
// const num = logNumber(10);
// logText(true);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str1 = logText<string>('abc');
str1.split('')
const login = logText<boolean>(true);

// logText('a')
// logText(10)

// 인터페이스에 제네릭을 선언하는 방법


interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<number> = { value: 'abc', selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function(text) {
//         console.log(text);
//     })
//     return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 정의하기
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType>(text: T) : T {
    text.length;
    return text;
}
logTextLength(10);
logTextLength({ length: 10 });
