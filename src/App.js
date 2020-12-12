import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={ () =>
                        <DialogsContainer /> }/>
                    <Route path='/profile' render={ () =>
                        <Profile /> }/>
                    <Route path='/friends' render={Friends}/>
                    <Route path='/news' render={News}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
