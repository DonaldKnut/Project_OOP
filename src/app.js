// import * as _ from "lodash";
import { ProjectList } from "./App/ProjectList.js";
import { intervalId } from "./Utility/Analytics.js";

// console.log(_.difference([2, 1], [2, 3]));

class App {
  static init () {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProjects.bind(finishedProjectsList));
    finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProjects.bind(activeProjectsList));

    // const timerInt = setTimeout(()=>{
    //     console.log("sending data....")
    // }, 3000);

    // document.getElementById("btnCreate").addEventListener("click", () => {
    //     clearTimeout(timerInt);
    // })

    // const someScript = document.createElement("script");
    // someScript.textContent = 'alert("Hi there");';
    // document.head.append(someScript);

    // this.startAnalytics();
    document.getElementById("btnCreate").addEventListener("click", this.startAnalytics);
  }

  static startAnalytics () {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "./Utility/Analytics.js";
    analyticsScript.defer = true;
    analyticsScript.type = "module";
    document.head.append(analyticsScript);
  }
}

App.init();

const myFunc = (cb) => {
  const value = 6;
  cb(value);
};

myFunc(value => console.log(value));

// const now = new Date();

// console.log(now);
// console.log(now.getFullYear());

// let isPrime = true;

// if(isPrime){
//     console.log("start programming");
// }

// class Element {
//     show(){
//         const createElement = document.createElement("div");
//         createElement.className = "createBtn";
//         document.body.append("createElement");
//         createElement.textContent = "DUMMY";
//     }
// }

// class CreateElement{
//     constructor(id){
//         this.id = id
//         this.create();
//         this.render();
//     }

//     create(){
//         const createElement = document.createElement("div");
//         createElement.className = "tooltip";
//         document.body.append(createElement);
//         createElement.textContent = "DUMMY";
//         // const element =  new Element();
//         // element.show();
//         // console.log(this);
//     }

//     render(){
//         const createBtn = document.getElementById(this.id);
//         createBtn.addEventListener("click", this.create.bind(this));
//     }
// }

// new CreateElement("btnCreate");

function createTaxCalculator (tax) {
  function calculateTax (amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

const factoryFunction = string => {
  const arrayOfCars = ["toyota", "mazda", "bmw"];
  arrayOfCars.unshift(string);
  console.log(arrayOfCars);
  const factoryFunction2 = anotherString => {
    const newCar = arrayOfCars[0] + " " + anotherString;
    arrayOfCars.push(newCar);
    return newCar;
  };

  return factoryFunction2;
};

const result = factoryFunction("mercedes");
// const resultTwo = factoryFunction("ferrari");
console.log(result("AMG CLA 45 Coupe"));

function powerOf (x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}

console.log(powerOf(4, 4));

function power (x, n) {
  if (n === 1) {
    return x;
  }
  return x * power(x, n - 1);
}

console.log(power(2, 3));

const myself = {
  name: "jizzy",
  friends: [{
    name: "ceon",
    friends: [{ name: "kehinde" }]
  },
  {
    name: "dj fuse"
  }
  ]
};

function printFriendNames (person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    // collectedNames.push(friend.name)
    // console.log(collectedNames);
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendNames(friend));
  }

  return collectedNames;
}

console.log(printFriendNames(myself));

console.log(0.2 + 0.6);
