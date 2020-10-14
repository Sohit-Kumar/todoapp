import React, { useState } from 'react';
import Todolist from './Todolist';

const App = () =>{

  const [inputlist , setInputlist] = useState("");

  const [items , setItems] = useState([]);

  const itemEvent = (event) => {
      setInputlist(event.target.value);
    };

  const listOfItems = () =>{
    setItems((oldItems) => {
      return [...oldItems,inputlist]; 
    });
    setInputlist("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) =>{
      return oldItems.filter((arrElement,index) =>{
          return index !== id;
      })
    } )
}


  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo Lists</h1>
          <br/>
          <input type='text' placeholder='Add Your Task' value={inputlist} onChange={itemEvent} />
          <button onClick={listOfItems} >+</button>
          <ol>
          {  items.map((itemval,index) => {
               return <Todolist 
               id={index}
               key={index}
               text={itemval}
               onSelect={deleteItems}               
                />
            }) } 
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
