import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from "./pages/Home"
import User from "./pages/User"
import Login from "./pages/Login"
import Logout from "./pages/Logout"

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false)

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/user/loggedIn")
      const data = await response.json()
      setLoggedIn(data.loggedIn)
    }
    fetchData()
  }, [])

  return (
    <Router>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-red-deep p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">FullStackApp</span>
        </div>
          <div className="w-full flex lg:items-center lg:w-auto lg:space-x-10">
            <div className="text-md lg:flex-grow">
              <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4">Home</Link>
            </div>
            <div className="text-md lg:flex-grow">
              <Link to="/user" className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4">User</Link>
            </div>
            <div className="text-md lg:flex-grow">
              <Link to={!loggedIn ? "/login" : "/logout"} className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4">{loggedIn ? "Logout" : "Login"}</Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto">
        <Switch>
          <Route exact path="/">
            <Home loginFunction={setLoggedIn} />
          </Route>
          <Route path="/user">
            {!loggedIn ? <Redirect to="/login" /> : <User />}
          </Route>
          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <Login loginFunction={setLoggedIn}/>}
          </Route>
          <Route path="/logout">
            {!loggedIn ? <Redirect to="/" /> : <Logout logoutFunction={setLoggedIn} /> }
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  )
}



export default App;
