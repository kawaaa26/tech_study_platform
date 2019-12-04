import React, { useState } from "react"
import { firebaseApp } from "../lib/firebaseApp/index.js"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async () => {
    alert(`
      ${email}
      ${password}
    `)

    const idToken = await firebaseApp.auth().currentUser.getIdToken(false)
    console.log(`current_user LOGIN TOKEN is HERE. ${idToken}`)
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>メールアドレス</label>
        <input type="email" onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>パスワード</label>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </div>
      <div>
        <input type="submit" value="ログイン" />
      </div>
    </form>
  )
}
