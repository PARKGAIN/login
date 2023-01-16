import React from "react";
import { useRecoilValue } from "recoil";
import { userSessionState } from "../atoms/userAtoms";

function Home() {
  const userId = useRecoilValue(userSessionState);
  return (
    <div>
      <h3 className="text-center mt-5rem">환영합니다</h3>
      <h3 className="text-center">{userId}님</h3>
    </div>
  );
}

export default Home;
