//学习分布操作符 解构  argument参数

//--------------------------arguments--------------------------------
// let sum = function(){
// 	console.log(arguments);      //arguments:对象     [2,3,4,5]
// }
// sum(2,3,4,5);

//---------------------------------------------------------------

//ES5:
// let sum = function(){
// 	return arguments.reduce(function(prev,curr){
// 		return prev + curr;
// 	});
// }
// sum(2,3,4,5);  //报错


//------------------------call / apply / bind---------------------

/* call:this指向第一个参数,也就是把函数运用于哪.  */

// var obj = {num:2};
// var addToThis = function(a){
// 	console.log(this);       //window
// 	return this.num + a;
// }
// console.log(addToThis(3));      //NaN

// var obj = {num:2};
// var addToThis = function(a){
// 	return this.num + a;           //此处this指向obj
// }
// console.log(addToThis.call(obj,3));     //5
// call方法的作用:1.为方法增加对象参数  2.改变函数内this指向
//--------------------------------------------------------------

 
/* apply:apply可以有多个参数,不同的是第二个参数必须是一个数组.  */
// var obj = {num:2};
// var addToThis = function(a,b,c){
// 	return this.num + a + b + c;
// }
// var array = [1,2,3];
// // console.log(addToThis.apply(obj,array)); 
// console.log(addToThis.call(obj,array[0],array[1],array[2]));
//--------------------------------------------------------------

/* 
	bind:bind返回一个修改后的函数.可以有多个参数,可以执行的时候再次添加,
	按照形参顺序进行. 
*/
// var obj = {num:2};
// var addToThis = function(a,b,c){
// 	return this.num + a + b + c;
// }
// let method = addToThis.bind(obj);
// console.log(method(1,2,3));

//--------------------------------------------------------------

//ES5:
// let sum = function(){
//  	return Array.prototype.reduce.call(arguments,function(prev,curr){
//         return prev + curr;
//     });
// }
// console.log(sum(2,3,4,5));       //14

//--------------------------------------------------------------

//ES6:
// let sum = function(...args){
// 	console.log(args);       //分布操作符      [2,3,4,5]
// }
// sum(2,3,4,5);

// let sum = function(...args){
// 	return args.reduce((prev,curr) => {
// 		return prev + curr;
// 	})
// }
// console.log(sum(2,3,4,5));         //14


// let numbers = [4,6,3,8];
// let arr = [1,2,...numbers,5,7];
// console.log(arr);                //1,2,4,6,3,8,5,7
//--------------------------------------------------------------

// ES5 求最大值
// let max = Math.max(2,3,5,6);
// console.log(max);             //6


// ES5 求最大值 传数组
// let numbers = [2,4,6,9];
// // let max = Math.max(numbers);       //NaN  
// let max = Math.max.apply(null,numbers);          //9
// console.log(max);      

//ES6 求最大值 传数组
// let num = [21,534,73,42];
// let max = Math.max(...num);
// console.log(max);            //534          


