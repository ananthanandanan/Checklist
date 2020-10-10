import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';

function App() {

  const [todos, setTodos] = useState(['Go for walking', 'Go to gym', 'Talk the friends']);
  const [input, setInput] = useState('');
  console.log("----", input);

  const addTodos = (event)=> {
    // adds the input to the todo
    // ...todos is called a spread or in the sense it prepends what was already there with the incoming input
    event.preventDefault();  // don't fire the referesh button 
    console.log("|||||This worked");
    setTodos([...todos, input]);
    setInput('');//reset the input state


  }

  return (
    <div className="App">
      <h1>Hello world!!</h1>
      <form>

      <FormControl>
        <InputLabel >Write a todo</InputLabel>
        <Input  value={input} onChange={events => setInput(events.target.value)} />
      </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodos} variant="contained" color="primary">
          Add-todo
        </Button>

      </form>
      
      <ul>
        {todos.map(todo => (
        <Todo text={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
