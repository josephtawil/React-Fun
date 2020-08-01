import React from 'react';
import './App.css';
import Auth from './components/auth';
import NotAuth from './components/notauth';
import ListItem from "./components/ListItem";

function App() {

const bool = true;
const array = [1,2,3,4,5];
const arr = array.map((res,id)=>{
  return <ListItem key = {id} passedNumber = {res} anotherProp = {res*2}/>;
})
  return (
    <div className="App">
     <h1>{bool ? <Auth/> : <NotAuth/>}</h1>
    
    <ul>{arr}</ul>
    </div>
  );
}

export default App;
