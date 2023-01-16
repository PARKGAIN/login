import React from "react";

function Join() {
  return (
    <div>
      <h3 className="text-center">회원가입</h3>
      <table>
        <p>*는 필수입력사항입니다.</p>
        <tr>
          <td>
            <label>*ID : </label>
          </td>
          <td>
            <input type="text" className="id" />
          </td>
          <td>
            <input className="form__form-btn" type="button" value="중복확인" />
          </td>
        </tr>
        <tr>
          <td>
            <label for="pw">*비밀번호 : </label>
          </td>
          <td>
            <input type="password" className="pw" />
          </td>
        </tr>
        <tr>
          <td>
            <label for="pw_check">비밀번호 확인 : &nbsp;</label>
          </td>
          <td>
            <input type="password" />
          </td>
        </tr>
      </table>
      <div className="margin-auto">
        <button className="form__submit-btn">회원가입</button>
        <button className="form__reset-btn">취소</button>
      </div>
    </div>
  );
}

export default Join;
