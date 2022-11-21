import React from "react";

function Login() {
  function postData() {
    fetch("http://localhost:8888/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div>
      <div class="login__wrap">
        <h4>로그인</h4>
        <div class="login__inner">
          <div class="login__login_center">
            <input
              class="login__input__id"
              id="id"
              type="text"
              placeholder="아이디"
            />
            <input
              class="login__input__pw"
              id="password"
              type="password"
              placeholder="비밀번호"
            />
            <div class="login__login_support">
              <span class="checkbox">
                <i></i>
              </span>
              <div class="label">
                <p class="cursor-pointer">아이디 저장</p>
              </div>
              <div class="login__wrap_find_id_join">
                <a class="cursor-pointer">아이디,비밀번호 찾기</a>
                <a class="cursor-pointer">회원가입</a>
              </div>
            </div>
            <br />
            <button
              type="button"
              class="button__stylebutton"
              onClick={postData}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
