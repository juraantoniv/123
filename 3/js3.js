// // - створити функцію яка обчислює та повертає площу прямокутника
// function fc(a,b){
//     let result
//     result=a*b;
//     console.log(result)
//     return result
// }
//
// fc(2,3)


// // - створити функцію яка обчислює та повертає площу круга

// function fc1(r){
//     let result
//     const p=3.14;
//     result=p*(r**2);
//     console.log(result)
//     return result
// }
// fc1(5)


// //- створити функцію яка обчислює та повертає площу циліндру

 // function cylindr(r,h){
 //   let result
 //   const p=3.14;
 //    result=(2*p*r)*(r+h)
 //  console.log(Math.round(result))
 //   return result
 // }
 //
 // cylindr(5,10)


// //- створити функцію яка приймає масив та виводить кожен його елемент



// let arry=[3,5,7,8,9,12,33,44,20]
//
// function masiv(arry){
//     for (i=0; i<arry.length; i++){
//         console.log(arry[i])
//     }
// }
//


//створити функцію яка створює параграф з текстом. Текст задати через аргумент


// /unction tx(text){
//     document.write(`<p>${text}</p>`)
// }
//
//tx(ddasdasdasfasfajkjkf);


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,

// function iterli(txt,iter){
//     document.write(<ul>)
//     for (let i = 0; i<iter; i++) {
//             <li>`${txt}`</li>
//     }
//    }


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий бло

// let newArray = [{id: 1, name: 'Brat', age: 35}, {id: 2, name: 'Yurii', age: 50}, {id: 3, name: 'Nazar', age: 34}];
//
// for (const newArrayElement of newArray) {
//     document.write(`<div>${newArray.id}.${newArrayElement.age} - ${newArrayElement.age}</div>)
//
// }