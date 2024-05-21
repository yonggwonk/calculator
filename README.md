# calculator
Simple calculator

# commit convention
*기능 구현 -> feature: 구현 기능
*코드 수정 -> refactor: 수정 사항 및 수정 이후 재구현된 기능

# file info
- index.html => 기본 layout
- calculator.js => 
    add()로 받은 expression을 new Function('return' +    expression) 을 통해 value에 연산된 값을 받는다.
    ->ex) add()를 통해 '7+12' 문자열이 expression 에 저장된다. 이후 = 버튼 클릭 시 new Function('return 7+12')를 통해 value에는 19가 반환된다.
    -clearDisplay => c 버튼 클릭 시 expression에는 빈 값, 입력창의 value에 0을 대입 해 초기화시킨다.

