import {Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import s from "./App.module.scss";

function App() {
  return (
      <div className={s.app}>
        <Navbar/>
        <div className={s.content}>
          <Routes>
            <Route path={"/"} element={<Profile/>}/>
            <Route path={"/dialogs"} element={<Dialogs/>}/>
          </Routes>

        </div>
      </div>
  );
}

export default App;
