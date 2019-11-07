import React from "react"
// FIXME: BrowserRouterを使いたい(直リンの挙動が怪しいので一旦HashRouterで機能を作る)
import { HashRouter as Router, Route, Redirect } from "react-router-dom"
// import { BrowserRouter, Route, Redirect } from "react-router-dom"
import { Home } from "pages/Home"
import { SignIn } from "pages/SignIn"

// export const RootPage = () => (
//   <Router>
//     <Route exact path="/" component={Home} />
//     <Route path="/signin" component={SignIn} />
//   </Router>
// )

// export default class RootPage extends React.Component {
export const RootPage = () => (

  constructor = (props) => {
    // super(props);
    this.state = { loading: true, authenticated: false, user: null };
  }

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;
    if (loading) return <p>Now Loading...</p>;
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={ () => authenticated === true ?
              ( <Home /> ) : ( <Redirect to='/signin' /> ) }
          />

          <Route exact path='/signin' render={ () => authenticated === false ?
  ( <SignIn /> ) : ( <Redirect to="/" /> ) }
          />
        </div>
      </BrowserRouter>
    );
  }
};
