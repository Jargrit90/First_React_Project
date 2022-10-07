import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  //let v1 = useSelector(state => state.app.value_1);
  //let v2 = useSelector(state => state.app2.value_2);
  /*
  V1: {v1}, {v2}
      <button onClick={()=>dispatch({type: 'changeValue_1'})}>Zmień v1</button>
      <button onClick={()=>dispatch({type: 'changeValue_2'})}>Zmień v2</button>
  */
  const dispatch = useDispatch();
  return (
    <div className="App">
      
    </div>
  )
}

export default App