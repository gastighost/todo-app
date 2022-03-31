import React, { useReducer } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

const initialState = {
  count: 0
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <br/>
      <Button onClick={() => dispatch({type: "increment"})}>
        Increment
      </Button>
      <Button variant="secondary" onClick={() => dispatch({type: "decrement"})}>
        Decrement
      </Button>
      <Button variant="success" onClick={() => dispatch({type: "reset"})}>
        Reset
      </Button>
    </div>
  )
}

function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return {count: state.count + 1}
    case "decrement":
      return {count: state.count - 1}
    case "reset":
      return initialState
    default:
      return initialState
  }
}

export default App;
