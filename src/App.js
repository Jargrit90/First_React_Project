import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Menu from './components/menu/menu';
import {
  Route,
  Routes
} from "react-router-dom";
import Mainpage from './components/mainpage/mainpage';
function App() {
  //let v1 = useSelector(state => state.app.value_1);
  //let v2 = useSelector(state => state.app2.value_2);
  /*
  V1: {v1}, {v2}
      <button onClick={()=>dispatch({type: 'changeValue_1'})}>Zmień v1</button>
      <button onClick={()=>dispatch({type: 'changeValue_2'})}>Zmień v2</button>
  */
  //const dispatch = useDispatch();
  return (
    <div className="App">
      <Menu />
      <Routes>
      <Route path="/" element={<Mainpage/>} exact />
      </Routes>
    </div>
  )
}

export default App