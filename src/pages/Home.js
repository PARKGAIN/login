import React from "react";

function Home() {
  async function getData() {
    const response = await fetch("http://localhost:8888/users");
    const data = await response.json();
    console.log(data[0]);
    document.getElementById("name").textContent = data[0].name;
  }

  getData();
  return (
    <div>
      <h4>사용자이름</h4>
      <h5 id="name"></h5>
    </div>
  );
}

export default Home;
