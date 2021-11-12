import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from 'react-bootstrap/Button';
import './App.css';
import Search from './components/Search';
import Menu from './components/NavBar';
import FilmList from './components/FilmListe';

import RatingBox from './components/RatingBox';



function App() {
  return (
    <div className="App"style={{ backgroundColor: "black"}}>
      

     <Menu></Menu>
     <Search></Search>
     <FilmList/>
     <RatingBox></RatingBox>
   

     <Button>add film</Button>
     
    </div>
  );
}


export default App;
