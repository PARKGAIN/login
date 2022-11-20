import React from "react";

function Home() {
  let { data } = fetch("http://localhost:8888/users")
    .then((Response) => Response.json())
    .then((json) => console.log(json));

  return <>{data}</>;
}

export default Home;
