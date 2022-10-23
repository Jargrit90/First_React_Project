import React, { useEffect } from 'react';
import './mainpage.css';
import './mainpageFuncs';
import * as f from  '../functions';
import {si, st, createField} from './mainpageFuncs';
function Mainpage (){
    useEffect(() => {
        f.cl_Int(si);
        createField();
        return () => { 
            f.cl_Int(si);
            clearTimeout(st);
        }
      }, []);
    return (
        <div>
            <div className="minus_2_bg flexCC">
                <div className="field_container flexCC"></div>
                <img className="bg_photo" src={`/First_React_Project/images/dc_logo.png`} />
            </div>
        </div>
    )
}
export default Mainpage;