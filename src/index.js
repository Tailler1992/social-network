import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './redux/store/store';
import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import UserSearch from './components/UserSearch/UserSearch';
import Login from './components/Login/Login';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          {path: '/user/:id', element: <Profile/>},
          {path: '/dialogs', element: <Dialogs/>},
          {path: '/user-search', element: <UserSearch/>},
          {path: '/login', element: <Login/>},
        ]
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
