function testFunk(){
    console.log("Hello world");
}

function a(x){
    if(x > 10){
        return "Hello";
    }
    return 3;
}

// from week 2 java higher order functions worksheet

const callMe = foo => foo();

function callMe_2(foo){
    foo();
}

const indirectIf = (bool, func1, func2) => (bool ? func1(): func2());

function indirectWhile(func1, func2){
    if(func1()){
        func2();
        indirectWhile(func1, func2);}

}