// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

var seungyeop: Person = {
    name: '승엽',
    age: 28
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string, title: string; done: boolean };
function getTodo(todo: Todo) {

}