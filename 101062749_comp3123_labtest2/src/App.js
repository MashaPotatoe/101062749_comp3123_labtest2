import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Button} from "react";
import axios from "axios";
import {Component} from 'react';
import { Routes, Route, BrowserRouter, NavLink, Link } from 'react-router-dom';

import UserL from './components/UserL';
import UserAlbum from './components/UserAlbum';
import Album from './components/Album';
import Searchy from './components/Searchy';
import SearchResults from './components/SearchResults';
import { FaUserAstronaut } from "react-icons/fa";
import { BsJournalAlbum } from "react-icons/bs";
import { FaIcons } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";


function App(){
  const [results, setResults] = useState([]);

  return (
    <div>
      <Searchy setResults = {setResults}/>
      <SearchResults results={results}/>
      <h1>User and their Album <FaIcons /></h1>
      <BrowserRouter>
     

      <nav className="nav">
        <NavLink className="nav-link" to='/userL'> Users <FaUserAstronaut /> </NavLink>
        <NavLink className="nav-link" to='/useralbum'>User Album <BsJournalAlbum /></NavLink>
        <NavLink className="nav-link" to='/album'>User Album 2<BsJournalAlbum /></NavLink>
        
     
        </nav>

<Routes className="body">
  <Route  path ='userL' element={<UserL/>} />
  <Route path ='useralbum' element={<UserAlbum/>} />
  <Route path ='album' element={<Album/>} />
  
</Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
