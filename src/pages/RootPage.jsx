import React from "react"
// FIXME: BrowserRouterを使いたい(直リンの挙動が怪しいので一旦HashRouterで機能を作る)
import { HashRouter as Router, Route } from "react-router-dom"
import { Home } from "pages/Home"
import { SignIn } from "pages/SignIn"

export const RootPage = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />
  </Router>
)
