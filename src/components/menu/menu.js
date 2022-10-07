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
                        <div className="band_member flexCC"><Link to="/czlonkinie/jiu">JiU</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/sua">SuA</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/siyeon">Siyeon</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/handong">Handong</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/yoohyeon">Yoohyeon</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/dami">Dami</Link></div>
                        <div className="band_member flexCC"><Link to="/czlonkinie/gahyeon">Gahyeon</Link></div>
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