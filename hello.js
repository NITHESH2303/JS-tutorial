let a;
let b = 2;
console.log(a);
a=7;
b=a;
console.log(a);

const myStr = "I m a \"double quoted\" string";
console.log(myStr)

const str = "1stLine\n\t\03ndLine";
console.log(str)

const last = str[0] + str[str.length - 1];
console.log(last)

function word(a,b){
    return a+b
}

console.log(word("Hello","World"))

const arr = [["abc"]];
arr.push(["efg"],["hij"])

console.log(arr)

arr.pop();

console.log(arr)

arr.shift()

console.log((arr))

arr.unshift(["123"])

console.log(arr)

const global = 10;

function fun(){
    var out=""
    if(typeof global!="undefined"){
        out = "global: " +global
    }
    console.log(out)
}
fun()


const test = [1, 2, 3, 4];

function nextInLine(arr,item){
    arr.push(item)
    return arr.shift()
}

console.log("Before:" + JSON.stringify(test));
console.log(nextInLine(test,5))
console.log("After: "+JSON.stringify(test))

function testBool(v1,v2){
    if(v1 == "3" || v2 ===3){
        return true
    }else {
        return false
    }
}
console.log(testBool(3,4))

function caseInSwitch(val){
    var ans=""
    switch (val){
        case 1:
            ans = "alpha";
            break
        case 2:
            ans = "beta"
            break
        default:
            ans = "None"
            break
    }return ans
}
val = 2
console.log(caseInSwitch(val))

var testObj = {
    "name" : "toby",
    "legs" : 4,
    "play" : ["all","in","house"]
}

console.log(testObj.name)
console.log(testObj.legs)
// console.log(testObj.play)
console.log(JSON.stringify(testObj.play))
testObj.bark = "bow bow"
console.log(testObj["bark"])

function checkSign(num) {
    return num>0? "+ve": num<0? "-ve":"0"
}
console.log(checkSign(-10))

const num = [1,2,3]

function editnum(){
    num[0]=4
    num[1]=5
    num[2]=6
}
editnum()
console.log(num)

function freezeObj(){
    "use strict"
    const MATH_CONSTRAINTS = {
        PI: 3.14
    }
    // Object.freeze(MATH_CONSTRAINTS)
    try {
        MATH_CONSTRAINTS.PI = 99
    }catch (ex){
        console.log(ex)
    }return MATH_CONSTRAINTS.PI
}

const PI = freezeObj()

console.log(PI)

// Arrow Function
var magic = () => new Date()

console.log(magic())

var concat = (n1,n2) => n1.concat(n2)

console.log(concat([1,2],[3,4]))

// Rest Operator
const sum = (function (){
    // return function sum(x,y,z){
    //     const args = [x,y,z];
    //     return args.reduce((a,b) => a+b,0);
    // }
    return function (...args){
        return args.reduce((a,b) => a+b,0)
    }
})()
console.log(sum(1,2,3))

// Spread Operator
const arr1 = ['JAN','FEB','MAR','APR']
let arr2
(function (){
    // arr2 = arr1
    arr2 = [...arr1]
    arr1[0]="None"
})()
console.log(arr2)

// Destructing Assignment

const Local_Forecast = {
    today : {min : 72, max: 83},
    tomorrow : {min : 73.3, max: 84.6}
}

function getmaxtemp(forecast){
    const {tomorrow : {max : max_tom}} = forecast
    return max_tom
}

console.log(getmaxtemp(Local_Forecast))

const source = [1,2,3,4,5,6,7,8,9]

function removeFirstTwo(list){
    const [ , ,...ls] = list
    return ls
}

const ls = removeFirstTwo(source)
console.log(ls)
console.log(source)

const person = {
    name : "Zodiac",
    age : 20
}

const greeting = `Hello, I am ${person["name"]}, aged ${person.age}.`

console.log(greeting)