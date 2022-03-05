import './App.css';
import React from 'react';
// import TodoApp from '../src/Components/TodoApp';
import MainEcommerce from '../src/Components/E-Commerce/Main';
import { Routes, Route } from "react-router-dom";
import Header from './Components/E-Commerce/Header'
import Login from './Components/E-Commerce/Login';
import MainPage from './Components/E-Commerce/MainPage';
import { Last } from './Components/E-Commerce/CardSection'

function App() {
  return (
    <>
      {/* <TodoApp /> */}
      <Header />
      <Routes>
        
      <Route path="/Login" element={<Login />} />
        <Route path="/Sign" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/Home" element={<MainEcommerce />} />
        <Route path="/Cart" element={<Last />} />
      </Routes>

      

    </>
  );
}

export default App;

