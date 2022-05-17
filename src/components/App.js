import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import user from "../data/user";

// pass this data down as props to the child component(s) that need it!

// console.log(user);
// console.log(user.links)

function App() {
  return (
    <div>
      <NavBar />
      <Home color = {user.color} name = {user.name} city = {user.city}/>
      <About bio = {user.bio} links = {user.links}/>

    </div>
  );
}

export default App;