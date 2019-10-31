import React from 'react'

export const SignIn = () => {
  return (
    <form onSubmit={() => alert("Hi!")}>
      <div>
        <label>メールアドレス</label>
        <input type="email" />
      </div>
      <div>
        <label>パスワード</label>
        <input type="password" />
      </div>
      <div>
        <input type="submit" value="ログイン" />
      </div>
    </form>
  )
}
