import React from "react";
import './App.css';
import Nav from "./components/Nav/Nav";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={ () =>
                        <DialogsContainer /> }/>
                    <Route path='/profile/:userId?' render={ () =>
                        <ProfileContainer /> }/>
                    <Route path='/friends' render={Friends}/>
                    <Route path='/users' render={ () => <UsersContainer/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/login' render={Login}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>

    );
}

export default App;
