import React, { useState } from "react"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = () => {
    alert(`
      ${email}
      ${password}
    `)
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
