import { atom } from "recoil";

export const userListState = atom({
  key: "userListState",
  default: [{ id: "admin", pw: "0000" }],
});

export const userSessionState = atom({
  key: "userSessionState",
  default: "",
});
