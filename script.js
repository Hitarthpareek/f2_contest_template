/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map( (obj)=>{ if(obj.profession=="developer"){ console.log(obj) } })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach( (obj)=>{ if(obj.profession=="developer"){console.log(obj)} })
}

function addData() {
  //Write your code here, just console.log
  let data = {id:4, name:"susan", age:"20", profession:"intern"} 
  arr.push(data)
  console.log(data)
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((person) => person.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
  { id: 4, name: "emma", age: "21", profession: "designer" },
  { id: 5, name: "liam", age: "23", profession: "tester" },
  { id: 6, name: "olivia", age: "22", profession: "developer" },
];
let combinedArray = arr.concat(arr2);
console.log(combinedArray);
}
