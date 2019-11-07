import React from "react"
import { HomeHeader } from "components/Home/HomeHeader"

export const Home: React.FC = () => (
  <div>
    <HomeHeader />
    <button onClick={ () => firebase.auth().signOut() }>Sign Out</button>
  </div>
)
