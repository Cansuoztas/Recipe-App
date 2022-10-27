import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/about/About'
import Details from '../pages/details/Details'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import PrivateRouter from './PrivateRouter'
import Contact from '../pages/contact/Contact'
const AppRouter = () => {
  const [loginOn, setLoginOn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setLoginOn={setLoginOn} loginOn={loginOn} />}
        />

        <Route
          path="/home"
          element={<PrivateRouter setLoginOn={setLoginOn} loginOn={loginOn} />}
        >
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Details />} />
        </Route>



        <Route
          path="/about"
          element={<PrivateRouter setLoginOn={setLoginOn} loginOn={loginOn} />}
        >
          <Route path="" element={<About />} />
        </Route>
        <Route
          path="/contact"
          element={<PrivateRouter setLoginOn={setLoginOn} loginOn={loginOn} />}
        >
          <Route path="" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter