import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  //when the app loads we need to listen the database and fetch the new todos as they get add/remove
  //useEffect(function, dependecies); -> its a hook which runs once when app loads
  useEffect(() => {
    //this code here fires.. when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {

      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));// doc.data() is object of doc with todo field 
    })
  }, []);

  const addTodos = (event)=> {
    // adds the input to the todo
    // ...todos is called a spread or in the sense it prepends what was already there with the incoming input
    event.preventDefault();  // don't fire the referesh button 
    //console.log("|||||This worked");
    //setTodos([...todos, input]);
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    });
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
        <Todo todo={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
