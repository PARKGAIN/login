import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userListState, userSessionState } from "../atoms/userAtoms";
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    id: "",
    pw: "",
  });
  const userList = useRecoilValue(userListState);
  const [loginSession, setLoginSession] = useRecoilState(userSessionState);

  const setId = (e) => {
    setInput({ ...input, id: e.target.value });
  };
  const setPw = (e) => {
    setInput({ ...input, pw: e.target.value });
  };

  function submit() {
    const includeUserId = userList.map((x) => x.id).includes(input.id)
      ? true
      : false;
    const includeUserPw = userList.map((x) => x.pw).includes(input.pw)
      ? true
      : false;

    return includeUserId && includeUserPw;
  }
  function login() {
    setLoginSession(input.id);
    navigate("/home");
  }
  function loginFail() {
    alert("다시 입력해주세요");
    setInput({ ...input, id: "", pw: "" });
  }

  return (
    <div>
      <div className="login__wrap">
        <h3>로그인</h3>
        <div className="login__inner">
          <div className="login__login_center">
            <input
              className="login__input__id"
              id="id"
              type="text"
              placeholder="아이디"
              value={input.id}
              onChange={setId}
            />
            <input
              className="login__input__pw"
              id="password"
              type="password"
              placeholder="비밀번호"
              value={input.pw}
              onChange={setPw}
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
                <Link to="/join" className="cursor-pointer">
                  회원가입
                </Link>
              </div>
            </div>
            <br />
            <button
              type="button"
              className="button__stylebutton"
              onClick={() =>
                submit(input.id, input.pw) ? login() : loginFail()
              }
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
