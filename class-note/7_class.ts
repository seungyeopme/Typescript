class Person1 {
    private name1: string;
    public age: number;
    readonly log: string;

    constructor(name1: string, age: number) {
        this.name1 = name1;
        this.age = age;
    }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

//리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
    return <div>Hello World</div>
}

//
new VTTCue({
    el: '',
    setup() {
        
    }  
})