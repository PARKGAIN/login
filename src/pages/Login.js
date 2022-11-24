import React, { useEffect, useState } from "react";

function Login() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  function postData() {
    fetch("http://localhost:8888/users", {
      method: "POST",
      body: id,
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  // 이메일 입력값과 비번 입력값 받아서 객체에다가 넣어야하는데...
  let a = function onChangeId() {
    setId(id);
  };
  let b = function onChangePw() {
    setPw(pw);
  };
  useEffect(a, b, []);

  return (
    <div>
      <div className="login__wrap">
        <h4>로그인</h4>
        <div className="login__inner">
          <div className="login__login_center">
            <input
              className="login__input__id"
              id="id"
              type="text"
              placeholder="아이디"
              value={id}
              onChange={a}
            />
            <input
              className="login__input__pw"
              id="password"
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={b}
            />
            <div className="login__login_support">
              <span className="checkbox">
                <i></i>
              </span>
              <div className="label">
                <p className="cursor-pointer">아이디 저장</p>
              </div>
              <div className="login__wrap_find_id_join">
                <a className="cursor-pointer">아이디,비밀번호 찾기</a>
                <a className="cursor-pointer">회원가입</a>
              </div>
            </div>
            <br />
            <button
              type="button"
              className="button__stylebutton"
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
