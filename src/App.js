import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Route,
  Routes,
  // Router,

} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {progress: 0}
  setProgress = (progress)=> {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar 
        height={3}
        color='#f11946' 
        progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general"pageSize= {20} country="in" category="general"/>}/> 
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business"pageSize= {20} country="in" category="business"/>}>  </Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment"pageSize= {20} country="in" category="entertainment"/>} >  </Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general"pageSize= {20} country="in" category="general"/>}>  </Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health"pageSize= {20} country="in" category="health"/>}>  </Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science"pageSize= {20} country="in" category="science"/>}>  </Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports"pageSize= {20} country="in" category="sports"/>}>  </Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology"pageSize= {20} country="in" category="technology"/>}>  </Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}