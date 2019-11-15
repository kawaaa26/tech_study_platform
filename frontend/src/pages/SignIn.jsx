import React, { useState } from "react"
import * as firebaseApp from "../lib/firebaseApp/index.js"
import * as firebase from "firebase"
import * as firebaseui from "firebaseui"

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
    // const res = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // firebase.auth().signInWithEmailAndPassword(email, password).then(function(res) {
    console.log(ui)
    ui.start("#firebaseui-auth-container", submit)
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
