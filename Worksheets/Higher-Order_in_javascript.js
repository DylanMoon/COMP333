//1
const callMe = foo => foo();

//2
const indirectIf = (bool, func1, func2) => {bool ? func1(): func2()};

//3
const indirectWhile = (func1, func2) => {if(func1()){func2(); indirectWhile(func1, func2);}};

//4
const wrapAdd = (func1, integer) => {return function (x) {func1(x+integer);}};