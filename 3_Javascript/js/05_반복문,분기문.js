// 메뉴 주문하기
function check1(){

  // 메뉴 가격
  const gimbap = 3000;
  const ramen = 3500;
  const donkkaseu = 5000;
  
  // 주문 개수 카운트

  let gCount = 0; // 김밥
  let rCount = 0; // 김밥
  let dCount = 0; // 김밥

  // prompt로 입력한 값을 저장할 변수 선언
  let input; //underfined
  
  // 비교 연산자
  // == ( 값이 동일한 경우 )
  // === ( 동일 비교 연산자 : 값, 자료형이 모두 같은 경우 )

  // underfined == null (== 로 비교시 같은 값이라고 )
  // underfined == null ( 자료형도 같은지 비교 undo )

  while(input != null) { // 취소 누르기 전까지 반복
    input = prompt("메뉴 번호를 입력하세요!")

    switch(input){
      case "1": gCount++; 
      case "2": rCount++; 
      case "3": dCount++; 
      case null : alert("주문 완료!"); break;
      default : alert("메뉴에 작성된 번호만 입력하세요");

    }

  }

  alert('김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}' );
  let sum = (gCount * gimbap) + (rCount *ramen) + (dCount *donkkaseu)


  // UP and Down  게임 
  
}