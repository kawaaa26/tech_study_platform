import React, { useState } from "react"
import { firebaseApp } from "../lib/firebaseApp/index.js"

console.log(firebaseApp)

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async () => {
    alert(`
      ${email}
      ${password}
    `)

    try {
      const res = await firebaseApp.auth().signInWithEmailAndPassword(email, password)
      console.log("SUCCEEDED!")
      console.log(res)
    } catch (error) {
      console.log(error)
      console.log("Login Failed")
    }
  }

  return (
    <form onSubmit={submit}>
      <div id="firebaseui-auth-container">
        <label>メールアドレス</label>
        <input type="email" onChange={e => setEmail(e.target.value)} />
      </div>
      <div id="firebaseui-auth-container">
        <label>パスワード</label>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </div>
      <div id="firebaseui-auth-container">
        <input type="submit" value="ログイン" />
      </div>
    </form>
  )
}
