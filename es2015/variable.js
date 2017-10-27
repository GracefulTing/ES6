// let name = "Henry";
// console.log(name);              //Henry
//--------------------------------------------------------

// let & var 区别: let拥有域的概念

// ------------------------var函数-----------------------
// function sayName(){
//   var name = "Henry";
// }
// sayName();
// console.log(name);         //name在函数中,是局部变量,所以为空
// 在js中,var的变量作用域仅限于函数中

// -----------------------let函数 if for-----------------
// function sayName(){
//   let name = "tt";
// }
// sayName();
// console.log(name);           //空


/*	let不能打印出值,var可以  */
// ---------------------------var------------------------
// if(true){
// 	var name = "tt";
// }
// console.log(name);           //tt

//---------------------------let--------------------------
// if(true){
//   let name = "tt";
// }
// console.log(name);           //空

//--------------------------var--------------------------

// for(var i = 0;i < 10; i++){
//   console.log(i);     //0-9
// }
// console.log("循环外",i);   //10

//---------------------------let--------------------------

// for(let i = 0;i < 10; i++){
//   console.log(i);      //0-9
// }
// console.log("循环外",i);  //报错,i is not defined

//---------------------------let--------------------------
//let的作用域仅限于自身的{}内
// {
//   let name = "tt";
// }
// console.log(name);        //空

//---------------------------var--------------------------

// var API_KEY = "dfljdlncmvnak";
// API_KEY = "234fjdsafop";
// console.log(API_KEY);    //234fjdsafop

//---------------------------let--------------------------

// let API_KEY = "dfljdlncmvnak";
// API_KEY = "234fjdsafop";
// console.log(API_KEY);     //234fjdsafop

//---------------------------const--------------------------

// const:常量是在程序运行过程中不可以被改变的量
// const API_KEY = "dfljdlncmvnak";
// // API_KEY = "234fjdsafop";       //有这句会报错
// console.log(API_KEY);      //dfljdlncmvnak

//---------------------------template--------------------------

// template模板语法
// var firstname = "ting";
// var lastname = "yy";

// // console.log("我的全名是:" + firstname + lastname);  //tingyy
// console.log(`我的全名是: ${firstname}  ${lastname}`);  //tingyy
