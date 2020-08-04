import React from 'react';
import './App.css';
import Auth from './components/auth';
import NotAuth from './components/notauth';
import ListItem from "./components/ListItem";
import UnOrderedList from "./components/UnOrderedList,"

function App() {

const bool = true;
const array = [1,2,3,4,5];
// const arr = array.map((res,id)=>{
//   return <ListItem key = {id} passedNumber = {res} anotherProp = {res*2}/>;
// });
  return (
    <div className="App">
     <h1>{bool ? <Auth/> : <NotAuth/>}</h1>
    
    <UnOrderedList>{array.map((res,id)=>( <ListItem key = {id} passedNumber = {res} theProp = {res*2}>{res}</ListItem>
))}</UnOrderedList>

    {/* <ul>{array.map((res,id)=>( <ListItem key = {id} passedNumber = {res} theProp = {res*2}>{res}</ListItem>
))}</ul> */}

    </div>
  );
}

export default App;
