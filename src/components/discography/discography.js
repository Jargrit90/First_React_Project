import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {
    Link
  } from "react-router-dom";

import '../../index.css';
import './discography.css';
function Discography(){
    let discImage = useSelector(state => state.discography.discsImage);
    let index = 0;
    const disc_image = discImage.map(disc => <DiscImage url={disc.url} title={disc.title} path={disc.path} key={index++} active={disc.active} />); 
    return (
        <div className="dyskografia">
            <div className="title">Dyskografia</div>
            <div className="flexCC">
                {disc_image}
            </div>
        </div>
    )
}
export default Discography;

const DiscImage = (props)=> {
    const {path, url, title, active} = props;
    return (
        <div className={active ? "disc_data active" : "disc_data not_active"}>
            <Link to={path}>
                <div className="disc_image_container flexCC">
                    <img src={url}/>
                </div>
                <div className="disc_title flexCC">
                    {title}
                </div>
            </Link>
        </div>
    )
}