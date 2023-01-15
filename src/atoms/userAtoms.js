import { atom } from "recoil";

export const userListState = atom({
  key: "userListState",
  default: [{ id: "admin", pw: "0000" }],
});

//userSessionState 만들어서 관리
