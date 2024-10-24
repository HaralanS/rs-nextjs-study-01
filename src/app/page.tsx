// 'use client'
// import { useState } from "react";


export default async function Home() {
  // const [count, setCount] = useState(0)

  // await new Promise(resolve => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/haralans')
  const user = await response.json()

  return (
    <div>
      <h1>Hello World!  ;D</h1>
      <p>{JSON.stringify(user)}</p>
      {/* <img src={user.avatar_url} alt="" /> */}
      {/* <p>{count}</p>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <button onClick={() => setCount(count => count - 1)}>-</button> */}
    </div>
  );
}
