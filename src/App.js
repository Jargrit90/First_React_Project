import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Menu from './components/menu/menu';
import {
  Route,
  Routes
} from "react-router-dom";
import Mainpage from './components/mainpage/mainpage';
import Band from './components/band/band';
import Member from './components/band_member/member';
import Discography from './components/discography/discography';
import Player from './components/discography/player';
function App() {
  let Nightmare = useSelector(state => state.discography.Nightmare);
  let FAITM = useSelector(state => state.discography.FAITM);
  /*
  V1: {v1}, {v2}
      <button onClick={()=>dispatch({type: 'changeValue_1'})}>Zmień v1</button>
      <button onClick={()=>dispatch({type: 'changeValue_2'})}>Zmień v2</button>
  */
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Menu />
      <Routes>
      <Route path="/" element={<Mainpage/>} exact />
      <Route path="/zespol" element={<Band/>}/>
      <Route path="/czlonkinie/jiu" element={<Member data={0}/>}/>
      <Route path="/czlonkinie/sua" element={<Member data={1}/>}/>
      <Route path="/czlonkinie/siyeon" element={<Member data={2}/>}/>
      <Route path="/czlonkinie/handong" element={<Member data={3}/>}/>
      <Route path="/czlonkinie/yoohyeon" element={<Member data={4}/>}/>
      <Route path="/czlonkinie/dami" element={<Member data={5}/>}/>
      <Route path="/czlonkinie/gahyeon" element={<Member data={6}/>}/>
      <Route path="/dyskografia" element={<Discography/>}/>
      <Route exact path="/dyskografia/nightmare" element={<Player data={Nightmare}/>}/>
			<Route exact path="/dyskografia/fall_asleep_in_the_mirror" element={<Player data={FAITM}/>}/>
      </Routes>
    </div>
  )
}

export default App