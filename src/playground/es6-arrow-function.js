//function square(x) {
//    return x * x;
//};

//const squareArrow = (x) => {
//    return x * x;
//};

//const squareArrow = x => x * x;

//console.log(squareArrow(4));

const fullName = 'Mike Smith';

const getFirstName = fullName => {
    return fullName.split(' ')[0];
}

const getFirstName2 = fullName => fullName.split(' ')[0];

console.log(getFirstName2(fullName));