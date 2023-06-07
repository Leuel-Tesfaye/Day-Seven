
// Exercises: Level 1
// 1. Declare a function fullName and it print out your full name.

let fullName = () => {
    console.log('Prince Hope')
}
fullName()

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

let FullName = (firstName, lastName) => {
    let space = " "
    let name = firstName + space + lastName
    return name
}
console.log(FullName('leuel', 'Tesfaye'))

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
let addNumbers = (num1, num2) => {
    let sum = num1 + num2
    return sum
}
console.log('The sum of the number is : ' + addNumbers(10, 10))

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
let areaOfRectangle = (length, width) => {
    let area = length * width
    return area
}
console.log('This is the area of a rectangle : ' + areaOfRectangle(10, 5))

// 5. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

let areaOfCircle = (rad, radius, Pi = 3.14) => {
    let circleArea = Pi * rad * radius
    return circleArea
}
console.log('This is the area of a circle :', areaOfCircle(5, 5))

// 6. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

let checkSeason = (month) => {
    let season
    switch (month) {
        case 'September':
        case 'November':
        case 'October':
            season = 'Autumn'
            break;
        case 'December':
        case 'January':
        case 'February':
            season = 'Winter';
            break;
        case 'March':
        case 'April':
        case 'May':
            season = 'Spring';
            break;
        case 'June':
        case 'July':
        case 'August':
            season = 'Summer';
            break;
        default:
            season = 'Invalid month';
    }
    return season
}
console.log(checkSeason ('June'))
// 7. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
let findMax = (a, b, c) =>{
    let find;
    if(a > b && a > c){
        console.log('maximum number is :')
        find = a
    }
    else if (b > a && b > c){
        console.log('maximum number is :')
        find = b
    }
    else if (c > a && c > b){
        console.log('maximum number is :')
        find = c
    }
    return find
}
console.log(findMax(10,20,6))

//8.  Declare a function name swapValues. This function swaps value of x to y.
let swapValues = (x,y) =>{
    let temp = x
    x = y 
    y = temp
    return [x, y]
}
console.log(swapValues(20,30))

// 9. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let printArray = (Array) =>{
    for( let i=0; i < Array.length; i++){
        console.log(Array[i])
    }
}
let myArray= [1,2,3]
printArray(myArray)

// 10. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

let userIdGeneratedByUser = () =>{
    let char = prompt('Enter the number of characters')
    let numberOfId = prompt('Enter the number of id to be generated')
    let result = []
    for(i = 0; i < numberOfId; i++){
        result.push(Math.random().toString(36).substring(2, char))
    }
    return result
}

console.log(userIdGeneratedByUser())



