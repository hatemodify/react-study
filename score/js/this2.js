// 생성자 함수에서의 this 자기자신

function Person() {
  this.arms = 2;
  this.legs = 2;
}

// 자바스크립트에서 객체를 생성하는 2가지 방법은 무엇인가? 아래는 어떤 방법인가?
//=> {} 리터럴 객체 , new 생성자 함수
//생성자 함수 규칙 (객체를 생성하기 위한 목적)
// 내부적으로 자기자신을 가르키는 this생성
// return 없거나 객체를 리턴하지 않으면 this를 리턴
var person = new Person();
// 실행 결과는 무엇인가? 실행결과에 대해서 설명하시오.
console.log(person);
// literal 객체로  person 객체를 생성하시오.

// 실행 결과는 무엇인가? 여기서 사용된 this는 무엇인가?
console.log(arms);
// 만일 this.arms, this.legs가 없다면 new Person()의 결과는 무엇인가?
