import React, { Component } from 'react'
import {
  // createBrowserRouter,
  // Route,
  // Routes,
  Link,

} from "react-router-dom";
export class NavBar extends Component{
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#" style={{fontWeight: "bold"}} >News Monkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{margin: "0 16px"}}>Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/business" style={{margin: "0 16px"}}>Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{margin: "0 16px"}}>Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general" style={{margin: "0 16px"}}>General</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health" style={{margin: "0 16px"}}>Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science" style={{margin: "0 16px"}}>Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports" style={{margin: "0 16px"}}>Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology" style={{margin: "0 16px"}}>Technology</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
    
}

export default NavBar
