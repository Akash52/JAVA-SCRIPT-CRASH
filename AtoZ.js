/*
Log to consloe 
console.log('Hello world');
console.log(123);
console.log(true)
var greeting = 'Hello';
console.log(greeting);
console.log(1, 2, 3, 4);
console.log({ a: 1, b: 2 });
console.log({ a: 1, b: 2 });
console.error("This is some errror");
console.clear();
console.warn();
console.time('Hello'); //Function start
console.log('Hello world');
console.log('Hello world');
console.log('Hello world'); //Display script taken time
console.log('Hello world');
console.log('Hello world');
console.timeEnd('Hello'); //Function End

multi
line
comments


//DataType,Naming,Rules
//var,let,const

var name = "Akash Doe";
console.log(name);
name = "Steave smith"; //Re-assing variable
console.log(name);

//Initialize variable

var greeting;
console.log(greeting); //undefined error
greeting = 'Hello';
console.log(greeting);

Letters,Numbers,_ string ,variable rules
Can not start with number
var  name = 'John'; //Return error
var name = 'John'; //these is valid

//Multi word vars

var firtsName = 'Akash'; //Camel case
var first_name = 'Sara'; //Underscore
var FirstName = 'Tome'; // Pascal case
var firstname; //Not recomneded 

//LET
let name;
let name = "Akash Doe";
console.log(name);
name = "Steave smith"; //Re-assing variable
console.log(name);

//Const

const name = "Akash Doe";
console.log(name);
name = "Steave smith"; // can't Re-assing variable
const greeting;

//Const
const Person = {
    name: 'Akash',
    age: '20'
}
Person.name = 'Sara';
Person.age = '30';

console.log(Person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);


//Data type

//PRIMITIVE

//String
const name = 'John doe';
Number
const age = 45;
Boolean
const hask = true;
Null
const car = null;
Undefined
let test;
Symbol
const sym = Symbol();

console.log(typeof name);
console.log(typeof age);
console.log(typeof hask);
console.log(typeof car);
console.log(typeof test);
console.log(typeof sym);

//REFERENCE

//Array
const hobbies = ['movie', 'music'];
Object literal
const address = {

    city: 'Rajkot',
    state: 'GUj'

}

console.log(typeof hobbies);
console.log(address);
const today = new Date();
console.log(today);

//Type conversion

let val;
//Number to string
val = String(555);
val = String(4 + 4);
//Bool to string
val = String(true);
//Date to string
val = String(new Date());
//Array to string
val = String([1, 2, 3, 4]);
toString()
val = (5).toString();
val = (true).toString();

//Stirng to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3, 4, 5]);


val = parseInt('100'); //Only return integer
val = parseFloat('100.4646'); //Return Float value


//String concersion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

Output 
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed());

//Numbers  & Math object

const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//Math object

val = Math.PI;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(16);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 3, 4, 5, 4, 6);
val = Math.max(45, 34, 54, 5);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1);



console.log(val);



//string and its operation

const firstname = 'Akash';
const lastname = 'Chauhan';
let val;
val = firstname + lastname;

//Concatenation
val = firstname + '' + lastname;

//Append
val = 'Brad ';
val += ' Traversy';
const age=50;
const str='Hello there my name is Akash';

val = 'Hello,my name is' + firstname + 'and I am ' + age;
const tags='web design,web development,full stack,mean stack,mern stack';

//Escaping
val = 'That\'s awesome, I can\'t wait';

//Length
val=firstname.length;

//concat
val=firstname.concat(' ',lastname);

//Change case
val=firstname.toUpperCase();
val=lastname.toLowerCase();

//Sub string
val=firstname.substring(0,4);

//slice
val=firstname.slice(0,4); //you can use neagtive number
val=firstname.slice(-3);

//Split
val=str.split(' ');
val=tags.split(',')

//Replace
val=str.replace('Akash','jack');

//Include
val=str.includes('Hello'); //If availble then return true
val=str.includes('foo');  //if not false

console.log(val);


const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");

//Template string

const name='Jhon';
const age='30';
const job='Web Developer';
const city='Rajkot';
let html;

//Without template string (es5)

html='<ul><li>Name :'+ name +'</li><li>Age:'+ age + '</li><li>Job:'+job+'</li><li>City:'+city+'</li></ul>';
document.body.innerHTML=html;

//With template string (es6)

function hello(){
    return 'hello how are you';
}

html=`
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${hello()}</li>
<li>${age>30 ? 'Over 30':'Under 30'}</li>
</ul>
`;

document.body.innerHTML=html;


//Create some arrays

const numbers=[42,34,45,33,32,34,43];
const num2= new Array(22,34,433,3,43,43);
const fruit=['Apple','Banana','Orange','Pear'];
const mixed=[24,24,54,'Akash',44,'Chauhan',true,undefined,null];



//Get array length

val=numbers.length;

//Check if is array
val = Array.isArray(numbers);

//GEt single value 
val=numbers[3];
val =numbers[0];
//Insert into array 
numbers[2]=100;
//Find index of value
val=numbers.indexOf(43);

//MUTING ARRAYS

//Add on to end 
numbers.push(250);
//Add on to front
numbers.unshift(120);
//Take of from end
numbers.pop();
//Take from front
numbers.shift();
//Splice values 
numbers.splice(1,3);
//reverse 
numbers.reverse();
//Concatenate array
val=numbers.concat(num2);
//Sorting array
val=numbers.sort();
val=fruit.sort();
//Use the "compare funtion"
val=numbers.sort(function(x,y){
    return x-y;
});

//Find 
function under50(num){
    return num<50;
}

val =numbers.find(under50);

console.log(numbers);
console.log(val);




//object literals

const Person={
    firstname:'Steav',
    lastname:'Smith',
    age:19,
    email:'steave@gmail.com',
    hobbies:['Music','sports'],
    address:{
        city:'Palitana',
        state:'GU'
    },


    getBirthYear: function(){
        return 2020-this.age;
    }

}
let val;

val=Person;

Get specific value
val=Person.firstname;
val=Person.lastname;
val=Person.age;
val=Person.address;
val=Person.address.state;
val=Person.address['city'];
val=Person.getBirthYear();

console.log(val);

const people=[
    {name:'John',age:30},
    {name:'Mike',age:30},
    {name:'Sky',age:18}
];


for(let i=0;i<people.length;i++){
    console.log(people[i]);
    console.log(people[i].name);
}

//Date and time
let val;
const today=new Date();
let birthday= new Date('9-18-1981');
val=birthday;

val=today.getDate();
val=today.getMonth();
val=today.getDay();
val=today.getFullYear();
val=today.getHours();
val=today.getMinutes();
val=today.getMilliseconds();
val=today.getTime();
val=today.getSeconds();

console.log(val);

//Equal to
const id=100;

if(id==100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT')
}
Not Equal to
if(id!=100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT')
}

//EQUAL TO VALUE & TYPE

if(id===100){
    console.log('CORRECT');
}
else{   //===  Compare Type and Value
    console.log('INCORRECT')
}

if(id!==100){
    console.log('CORRECT');
}
else{   //===  Compare Type and Value
    console.log('INCORRECT')
}
TEST IF UNDEFINED
if(typeof id!=='undefined'){
    console.log(`The ID is ${id}`);
}
else{
    console.log(`NO ID`);
}
//GREATER OR LESS THAN
if(id>100)
{
    console.log('YES')
}
else{
    console.log('NO');
}
//IF ELSE
const color='RED';

if(color==='RED')
{
    console.log('Color is red');
}
else if(color==='BLUE'){
    console.log('Color is blue');
}
else{
    console.log('YELLOW')
}
//LOGICAL OPERATOR

const name='Steave';
const age=20;

//AND &&
if(age>0 && age<12)
{
    console.log(`${name} is a child`);
}else if(age>=13 && age<=19){
    console.log(`${name} is a teneger`);
}
else{
    console.log(`${name} is adult`);
}
//OR 

if(age<16 || age>65){
    console.log(`${name} can not run in race`);
}else{
    console.log(`${name} is registered for the race`);
}

//TERNNARY OPERATOR DONE
console.log(id===100 ? 'CORRECT' : 'INCORRECT');
//WITHOUT BRACE
if(id==100)
console.log('CORRECT');
else
console.log('INCORRECT');


const color = "RED";

switch (color) {
  case "RED":
    console.log("Color is red");
    break;
  case "BLUE":
    console.log("COLOR IS BLUE");
    break;
  default:
    console.log("Color not find");
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wendsday";
    break;
  case 4:
    day = "Thirsday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;


}

console.log(`Today is ${day}`);

//FUNCTION declaration 
function greeting(firtsName,lastname) {
    //console.log('Hello');
    return 'Hello'+firtsName + ' '+lastname;
}
greeting();
console.log(greeting('Akash','Doe')); //Passing variable

FUNCTION EXPRESSION

const sqaure=function(x){
    return x*x;
}
console.log(sqaure(8));
//PROPERTY METHODS
    const todo={
        add:function()
        {
            console.log('Add todo...');
        },
        edit:function(id){
            console.log(`Edit todo ${id}`);
        }
    }
    todo.delete=function(){
        console.log('Delete todo...');
    }
    todo.add();
    todo.edit(20);
    todo.delete();


  //  Loops
  //  For 
for(let i=0;i<10;i++){

 console.log('Number'+ i);   

}


//While
let i=0;
while(i<10)
{
    console.log('Hello World');
    i++;
}

//DO WHILE

let i=0;

do{
    console.log('Number '+ i);
    i++;
}
while(i<10);

//Array with loops

const cars=['FORD','BMW','HONDA','TOYOTA'];

for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}


//FOR EACH LOOOP
cars.forEach(function(car){
    console.log(car)
});
cars.forEach(function(car,index,array){
    console.log(`${index}:${car}`);
    console.log(array);
});

//MAP

const users=[
    {id:1,name:'Akash'},
    {id:2,name:'Akash'},
    {id:3,name:'Akash'}
];

const ids=users.map(function(user){

    return user.id;

});
console.log(ids);


//FOR IN LOOP 
const user={
    first_name:'Akash',
    lastname:'Chauhan',
    age:40

}

for(let x in user)
{
    console.log(`${x}:${user[x]}`);
}

//WINDOW METHOD/ OBJECT / PROPERTIES

//Alert
window.alert("Hello World")

//Prompt
const input=prompt();
alert(input);

Confirm
if(confirm('Are you sure')){
    console.log('YES');
}
else{
    console.log('NO');
}

 let val;
//Outter height and width

val=window.outerHeight;
val=window.outerWidth;


//Inner height and width

val=window.innerHeight
val=window.innerWidth;
console.log(val);

val=window.location;

val=window.location.hostname;
val=window.location.port;
val=window.location.href;
val=window.location.search;

//Redirect

//window.location.href='http://google.com';

//Reload

window.location.reload();

Navigator Object
val=window.navigator;
val=window.navigator.appName;
val=window.navigator.appVersion;
val=window.navigator.userAgent;
val=window.navigator.platform;
val=window.navigator.vendor;
val=window.navigator.language;
val=window.navigator.languages;


console.log(val);



Scroll points
val=window.screenY;
val=window.screenX;


const sky = {
  name: 'ABC',
  age: '30',
}

console.log(sky)
console.log(sky.age)


// Person Constructor

function Person(name, age) {
  this.name = name
  this.age = age
}

const sky = new Person('sky', 18)
const Jhon = new Person('jhon', 19)

console.log(sky)


function Person(name, dob) {
  this.name = name
  //this.age = age

  this.birthday = new Date(dob)

  this.caculateAge = function () {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

const sky = new Person('Sky', '9-10-1981')
console.log(sky.caculateAge())


//Ajax & XHR Methods

document.getElementById('button').addEventListener('click', loadData)

function loadData() {
  // Create an  XHR Object
  const xhr = new XMLHttpRequest()
  //OPEN
  xhr.open('GET', 'data.txt', true)

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText)
    }
  }

  xhr.send()
}


//Working with AJAX & JSON

document.getElementById('button1').addEventListener('click', loadCustomber)
document.getElementById('button2').addEventListener('click', loadCustombers)

//Laod Single Customber
function loadCustomber(e) {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', '/data/customber.json', true)
  xhr.onload = function () {
    if (this.status == 200) {
      // console.log(this.responseText)

      const customber = JSON.parse(this.responseText)

      const output = `
      <ul>
      <li>ID: ${customber.id}</li>
      <li>Name: ${customber.name}</li>
      <li>Company: ${customber.company}</li>
      <li>Phone: ${customber.phone}</li>

      </ul>`

      document.getElementById('customer').innerHTML = output
    }
  }
  xhr.send()
}
//Load Cutomers
function loadCustombers(e) {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', '/data/customers.json', true)
  xhr.onload = function () {
    if (this.status == 200) {
      // console.log(this.responseText)

      const customers = JSON.parse(this.responseText)
      let output = ''

      customers.forEach(function (customer) {
        output += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
  
        </ul>`
      })

      document.getElementById('customers').innerHTML = output
    }
  }
  xhr.send()
}


// Getting data from an External API

document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value

  const xhr = new XMLHttpRequest()

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText)

      let output = ''

      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`
        })
      } else {
        output += '<li>Something went wrong</li>'
      }

      document.querySelector('.jokes').innerHTML = output
    }
  }

  xhr.send()

  e.preventDefault()
}
*/

// Callbak Funtion
const posts = [
  { title: 'Post One', body: 'this is post one' },
  { title: 'Post Two', body: 'this is post two' }
]

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post)
    callback()
  }, 2000)
}

function getPosts() {
  setTimeout(function () {
    let output = ''
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
  }, 1000)
}

createPost({ title: 'Post Three', body: 'This is post three'{title:'Post One',body:'this is post one'}, getPosts })
