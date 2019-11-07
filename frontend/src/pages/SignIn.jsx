import React, { useState } from "react"
import { withRouter } from "react-router"

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleSignup = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  // async handleSignUp = (e) => {
  async handleSignUp(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.props.history.push('/');
    } catch (error) {
      alert(error);
    }
  }

  // async handleSignIn = (e) => {
  async handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.history.push('/');
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" value={email} type="text" onChange={ (e) => this.setState({ email: e.target.value }) } />

          <label htmlFor="password">Password</label>
          <input id="password" value={password} type="password" onChange={ (e) => this.setState({ password: e.target.value }) } />
        </div>
        <button onClick={ this.handleSignUp }>Sign Up</button>
        <button onClick={ this.handleSignIn }>Sign In</button>
      </div>
    );
  }
};

export default withRouter(SignIn);

// export const SignIn = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const submit = () => {
//     alert(`
//       ${email}
//       ${password}
//     `)
//   }

//   return (
//     <form onSubmit={submit}>
//       <div>
//         <label>メールアドレス</label>
//         <input type="email" onChange={e => setEmail(e.target.value)} />
//       </div>
//       <div>
//         <label>パスワード</label>
//         <input type="password" onChange={e => setPassword(e.target.value)} />
//       </div>
//       <div>
//         <input type="submit" value="ログイン" />
//       </div>
//     </form>
//   )
// }
