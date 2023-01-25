import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

import s from './App.module.scss';

const App = () => {
  return (
    <>
        <Navbar/>
        <div className={s.content}>
          <Header/>
          <Outlet />
        </div>
    </>
  );
};

export default App;
