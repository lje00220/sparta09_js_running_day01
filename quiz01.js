// ## 1. 빈칸 채우기 문제

// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
// 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

1;
let uninitialized;
console.log(uninitialized);
// 결과값 < undefined >
// 선언은 되었지만 아직 값이 할당되지 않았기 때문에 undefined가 출력된다.

2;
{
  /* < const > apple = "사과"; */
} // 다음 코드에서 상수에 할당을 하려고 했기 때문에 타입에러가 발생하였으므로 상수를 선언하는 const가 들어간다
apple = "바나나"; // TypeError: Assignment to constant variable

3;
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열의 인덱스는 0부터 시작하기 때문에 lotto[3]은 19가 된다.

4;
let mySchedule = "";
console.log(mySchedule || false); // < false >, mySchedule은 false여서 두 값 모두 false이기 때문에 가장 오른쪽에 있는 값인 false가 출력된다.
console.log(!!mySchedule); // < false >, !!를 하면 불리언 값으로 변환되기 때문에 빈문자열은 falsy 값이라서 false가 반환된다.
