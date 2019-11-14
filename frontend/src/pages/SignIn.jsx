import React, { useState } from "react"
// import firebaseApp from "../lib/firebaseApp/index.js"
import "firebase/auth"
import * as firebaseApp from "../lib/firebaseApp/index.js"

console.log(firebaseApp);

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async() => {
       alert(`
      ${email}
      ${password}
    `)

  // (async () => {

    // const res = await firebaseApp.services_.auth().signInWithEmailAndPassword(email, password);
    const res = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    // firebase.auth().signInWithEmailAndPassword(email, password).then(function(res) {
      console.log(res);
    };


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
