//1
arr.filter(x => x % 2 === 0);

//2
arr.map( x => x + 7);

//3
arr.reduce((smallest, current) => current < smallest ? current : smallest, 0);

//4
arr.filter(x => x % 2 === 1).reduce((previousValue, currentValue) => previousValue + currentValue, 0);