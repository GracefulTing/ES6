//箭头函数
// let add = (a,b) => {
//   return a + b;
// }
// console.log(add(2,4));       //6

//--------------------------------------------------------
//let numbers = [1,2,5,8];
//将数组中的值进行翻倍
// for(let i=0;i<numbers.length;i++){
//   numbers[i] *= 2;
// }
// console.log(numbers);         //[2, 4, 10, 16]
//--------------------------------------------------------

//ES5:
// let doubles = numbers.map(function(n){
//   return n * 2;
// });

// console.log(doubles);             //[2,4,10,16]
//--------------------------------------------------------

//ES6:
//参数只有一个可以省略掉括号
// let doubles = numbers.map(n => {  //也可使用
// let doubles = numbers.map((n) => {
//   return n*2;
// });
// console.log(doubles);            //[2, 4, 10, 16]
//--------------------------------------------------------


// let person = {
//   name:"tt",
//   sayName:function(){
//     console.log(`hello ${this.name}`);
//   }
// }
// person.sayName();    //hello tt
//--------------------------------------------------------

// 这样不行
// let person = {
//   name:"tt",
//   sayName:() => {
//     console.log(`hello ${this.name}`);      //hello undefined或hello
//   }
// }
// person.sayName();
//--------------------------------------------------------

//实现打招呼
// let person = {
//   name:"tt",
//   sayName(){
//     console.log(`hello ${this.name}`);
//   }
// }
// person.sayName();   //hello tt
//--------------------------------------------------------

//实现ES5数组遍历
// let per = {
// 	name:"tt",
// 	hobbies:["music","ll","aa"],
// 	showHobbies:function(){
// 		console.log(this);    //per
// 		this.hobbies.forEach(function(hobby){
// 			console.log(this);   //window
// 			console.log(`${this.name}的爱好是${hobby}`);  //空的爱好是打篮球...
// 		})
// 	}
// }
// per.showHobbies();
//--------------------------------------------------------


// let per = {
//   name:"tt",
//   hobbies:["打篮球","写代码","王者荣耀"],
//   showHobbies:function(){
//   	let self = this;
//   	this.hobbies.forEach(function(hobby){
//   		// console.log(this);        //window
//   		console.log(`${self.name}的爱好是${hobby}`);          //tt的爱好是打篮球...
//   	});
//   }
// }
// per.showHobbies();
//--------------------------------------------------------

//实现ES6数组遍历
// let per = {
//   name:"tt",
//   hobbies:["打篮球","写代码","王者荣耀"],
//   showHobbies(){
//   	this.hobbies.forEach((hobby) => {
//   		console.log(`${this.name}的爱好是${hobby}`);           //tt的爱好是打篮球...
//   	});
//   }
// }
// per.showHobbies();
//--------------------------------------------------------

//ES5:this找不到对象,this找window
//ES6:this找不到对象,this找上级
