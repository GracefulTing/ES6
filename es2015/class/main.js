//----------------------ES5 类-------------------------------
// function Plane(){
// 	this.wings = 2;
// 	this.speed = 100;
// 	this.altitude = 0;
// }

// const myPlane = new Plane();
// console.log(myPlane.wings);           //2

// //为Plane这个类扩展方法
// Plane.prototype.fly = function(){
// 	this.altitude = 3000;
// }

// myPlane.fly();
// console.log(myPlane.altitude);            //3000

// //创建另外一个类
// function FighterPlane(){
// 	this.speed = 1000;
// }

// FighterPlane.prototype = new Plane();
// var fighterPlane = new FighterPlane();
// fighterPlane.fly();
// console.log(fighterPlane.altitude);       //3000

//--------------------------ES6 类------------------------
class Person{
	constructor(name,age,weight){
		this.name = name;
		this.age = age;
		this.weight = weight;
	}
	displayWeight(){
		console.log(this.weight);
	}
}

let person1 = new Person("dede",20,"100");
// person1.displayWeight();      //100
// console.log(person1.name);        //dede

class Programmer extends Person{
	constructor(name,age,weight,language){
		super(name,age,weight);
		this.language = language; 
	}
	displayWeight(){
		console.log(this.weight + "kg");
	}
}

let tt = new Programmer("tt","18","45","c");
tt.displayWeight();          //45kg
console.log(tt.language);       //c


