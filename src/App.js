import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
  return (
      <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className="app-wrapper-content">
            <Route path='/messages' component = { Dialogs } />
            <Route path='/profile' component = { Profile } />
            <Route path='/friends' component = { Friends } />
            <Route path='/news' component = { News } />
            <Route path='/settings' component = { Settings } />
      </div>
      </div>
      </BrowserRouter>
  );
}





export default App;
