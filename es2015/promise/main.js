// alert(12);

"use strict";    //严格模式

// console.log(this);        //window

// function worthless(){
// 	console.log(this);      //undefined
// }
// worthless();

//实例化promise对象
let myPromise = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("成功时会显示这句话!");
	},1000);

	setTimeout(() => {
		reject("error,网络连接失败!");
	},2000);
});
// myPromise.then((data) => {
// 	console.log(data);
// },(err) => {
// 	console.log(err);                      //成功时会显示这句话!
// });
// console.log(myPromise);


// myPromise.then((data) => {
// 	console.log(data);
// })
// .catch((err) => {
// 	console.log(err);      //如果成功执行then,否则catch
// })

let myPromise2 = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("队列中的第二个成功时调用的数据!");
	},1500);
})

Promise.all([myPromise,myPromise2])
	   .then((data) => {
			console.log(data);
		})                                       //["成功时会显示这句话!", "队列中的第二个成功时调用的数据!"]
	   .catch((err) => {
	   		console.log(err);
	   })

//请求接口
fetch("http://localhost:3000/users")       //需要run npm json:server运行
	.then((res) => {
		res.json().then((data) => {
			console.log(data);
		})
	})
	.catch((err) => {
		console.log("error:请求失败!");
	})

//promise:
// then():第一个回调函数,在成功时触发,第二个在失败时触发.
// catch():主要负责捕捉异常错误信息.

