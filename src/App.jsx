import {Route, Routes, redirect} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import UserSearch from './components/UserSearch/UserSearch';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

import s from './App.module.scss';

const App = () => {

  return (
    <>
      <Header/>
      <div className={s.app}>
        <Navbar/>
        <div className={s.content}>
          <Routes>
            <Route path={'/user/:id'} element={<Profile/>}/>
            <Route path={'/dialogs'} element={<Dialogs/>}/>
            <Route path={'/user-search'} element={<UserSearch/>}/>
            <Route path={'/login'} element={<Login/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
