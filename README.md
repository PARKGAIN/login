# 회원가입을 부르는 로그인 페이지



## 소개

json-server를 공부할 목적으로 json-server에 저장한 아이디와 비밀번호를 fetchAPI로 불러오는 코드를 작성하다가,
전역상태관리 도구인  recoil을 공부할 목적으로 json-server 대신  atom 에 아이디와 비밀번호를 저장하였습니다.<br/> 단, 이렇게 하면 안되고 실제 서비스의 경우에는 쿠키 또는 세션에 로그인 정보를 담는 것으로 알고 있습니다. 
<br/>
npm 패키지매니저를 사용하다가 node_modules가 무거워서 지우고 설치하는데 시간이 오래결리는 문제를 해결하고자 패키지 매니저로 yarn berry를 사용했습니다.
yarn berry를 zero-install로 설정해서 하면 node_modules 대신 cache에 저장이 된다는 것을 알게되었습니다.
yarn berry는 아직은 익숙하지 않아서 module not found 와 같은 에러를 많이 만났습니다. 따라서 만약 다른 개인 프로젝트를 한다면 개발 생산성 측면에서 yarn 패키지매니저를 사용할 것같습니다.


## 기능

 1. 로그인 기능
 2. 로그인 성공시 홈 화면으로 이동

## 배포 링크 

https://parkgain.github.io/login/

warn! 여기에 실제 자신이 사용하는 id 또는 비밀번호를 입력하지 마세요! <br/>
(쉿 ! id는 admin 비밀번호는 0000 입니다.)
