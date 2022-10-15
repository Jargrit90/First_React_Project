import React, { useState } from 'react';
import {
    Route,
    Routes,
    Link
  } from "react-router-dom";
 
  import {useSelector, useDispatch} from 'react-redux';
function Menu(){
    const dispatch = useDispatch();
    let isVisible = useSelector(state => state.submenu.isVisible);
    let member_num = useSelector(state => state.member.member_num);
    return (
        <div>
            <div className="menu_buttons_container flexCC">
                <div className="menu_button flexCC">
                    <Link exact to="/" onClick={()=>dispatch({type: 'setIsVisibleFalse'})}>Strona główna</Link>
                </div>
                <div className="menu_button flexCC">
                    <Link to="/zespol" onClick={()=>dispatch({type: 'setIsVisibleFalse'})}>O zespole</Link>
                </div>
                <div className="menu_button flexCC">
                    <div className="button_title" onClick={()=>dispatch({type: 'toggleState'})}>Członkinie zespołu</div>
                    {isVisible 
                    ?
                    <div className="band_members flexCC">
                        <div className="band_member flexCC"><Link to="/czlonkinie/jiu" onClick={()=>{dispatch({type: 'changeMember', payload: 0}); dispatch({type: 'setIsVisibleFalse'})}}>JiU</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/sua" onClick={()=>{dispatch({type: 'changeMember', payload: 1}); dispatch({type: 'setIsVisibleFalse'})}}>SuA</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/siyeon" onClick={()=>{dispatch({type: 'changeMember', payload: 2}); dispatch({type: 'setIsVisibleFalse'})}}>Siyeon</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/handong" onClick={()=>{dispatch({type: 'changeMember', payload: 3}); dispatch({type: 'setIsVisibleFalse'})}}>Handong</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/yoohyeon" onClick={()=>{dispatch({type: 'changeMember', payload: 4}); dispatch({type: 'setIsVisibleFalse'})}}>Yoohyeon</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/dami" onClick={()=>{dispatch({type: 'changeMember', payload: 5}); dispatch({type: 'setIsVisibleFalse'})}}>Dami</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/gahyeon" onClick={()=>{dispatch({type: 'changeMember', payload: 6}); dispatch({type: 'setIsVisibleFalse'})}}>Gahyeon</Link></div>
                    </div>
                    :
                    null
                    }
                </div>
                <div className="menu_button flexCC">
                    <Link to="/dyskografia" onClick={()=>dispatch({type: 'setIsVisibleFalse'})}>Dyskografia</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Menu;