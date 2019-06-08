function Animal(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function() {
    console.log(this === myCat);
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
var myCat = new Animal('Cat', 4);

// 리터럴 객체로 Animal 객체를 적으시오.
// 실행결과를 적으시오. function 안에 this는 무엇을 가르키는가?
myCat.logInfo();
console.log(myCat);

// 실행결과를 적으시오. this는 무엇을 가르키는가?
setTimeout(myCat.logInfo, 1000);

// var myCat = {
//   type:'cat',
//   legs:4,
//   logInfo :function(){
//     console.log(this === myCat)
//     console.log(this.type, this.legs)
//   }
// }
//
// console.log(myCat.logInfo())


//json 객체에서는 상위 부모를 가리킴
