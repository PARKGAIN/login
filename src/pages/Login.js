import React from "react";

function Login() {
  return (
    <div>
      <div class="login__wrap">
        <div class="login__inner">
          <div class="single__header">
            <img alt="로그인페이지" />
          </div>
          <div class="login__login_center">
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <div class="login__login_support">
              <span class="checkbox">
                <i></i>
              </span>
              <div class="label">
                <p class="h5">아이디 저장</p>
              </div>
              <a>아이디,비밀번호 찾기</a>
              <a>회원가입</a>
            </div>
            <button type="button" class="button__stylebutton">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
