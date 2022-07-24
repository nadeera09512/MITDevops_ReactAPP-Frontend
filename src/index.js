import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddStudentPage from './pages/AddStudentPage';
import AddUser from './pages/AddUser';
import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LogIn';
import UpdateStudentPage from './pages/UpdateStudentPage';
import DataPage from './pages/DataPage';
import DataPageViewer from './pages/DataPageViewer';
import * as routes from './Routes/routes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/studentInventory/" element={<LoginPage />} />
        <Route exact path={routes.adminRoute()} element={<DataPage />} />
        <Route exact path={routes.userRoute()} element={<DataPageViewer />} />
        <Route
          exact
          path={routes.addStudentRoute()}
          element={<AddStudentPage />}
        />
        <Route exact path={routes.addUserRoute()} element={<AddUser />} />
        <Route exact path={routes.loadingRoute()} element={<LoadingPage />} />
        <Route
          exact
          path={routes.updateStudentRoute()}
          element={<UpdateStudentPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log resultsi (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
