// a function to add two numbers 
function addTwoNumbers () {
    let num1 = 10
    let num2 = 20 
    let add = num1 + num2
    console.log('This is the addition of the two numbers : ' , add)
}
addTwoNumbers()

// here is another concept : Function returning value

function sum () {
    let numOne = 10 
    let numTwo = 5 
    let addition = numOne + numTwo
    return addition
}
console.log('The value returned : ',sum())

// here is the third concept about function : Function with a parameter

function plus (numberOne, numberTwo){
    let plus = numberOne + numberTwo
    console.log('The two parameters value: ', plus)
}
plus(40 , 10)

// parameters passed and returned value 
function conCat (firstName , lastName){
    return  `${firstName} ${lastName}`
}
console.log(conCat('Leuel', "Tesfaye"))

// arrow function 
// arrow function alternative to write a function

const square = number=> {
    
    return number * number
}
console.log(square(10))

// arrow function explained with greeting example 
const greet = ()=> {
    let name = 'prince'
    console.log(`Hello my  name is ` + name)
}
greet() 

// Function with default parameters
// Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used.

const calculateAge = (birthYear, currentYear = 2023) => {
    const age = currentYear - birthYear
    return age
}
console.log('Your age is Age:', calculateAge(1999))// here i pass the birth year but not current year so it uses the default to calculate the age of a person 

// another example for function with default parameters 
let PersonName = (fullName = 'Prince Hope') =>{
    let naming = fullName + ", welcome to 30 days of javascript"
    return naming
}
console.log(PersonName()) // if i pass a parameter here prince hope will be over ride 