import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import './discography.css';
import * as f from  '../functions';
let si2;

function Player(props) {

    const {name, arr} = props.data;
    const {song_num, play} = useSelector(state => state.discography);

    let song_number = song_num;
    let song_length = useSelector(state => arr[song_number].song_length_s);
    let playSong = play;
    let disc = useSelector(state => name);
    const dispatch = useDispatch();
    let index = 0;
    let songs = arr.map(song => <Song index={index} song_num={index} name={song.title} length_in_sec={song.song_length_s} length={song.song_length} key={index++}/>);
    //console.log(song);

    return (
        <div className="flexCC">
            <div className="player flexCC">
                <div className="song_title">
                    {props.data.arr[song_number].title}
                </div>
                <div className="timer">
                    <Timer song_length_s={song_length}/>
                </div>
                <div className="buttons flexCC">
                    <div onClick={()=>dispatch({type: 'playSong', payload: true})}><i className="fa-solid fa-play"></i></div>
                    <div onClick={()=>dispatch({type: 'playSong', payload: false})}><i className="fa-solid fa-pause"></i></div>
                    <div onClick={()=>dispatch({type: 'resetSong'})}><i className="fa-solid fa-stop"></i></div>
                </div>
                <div className="song_length_bar flexCC">
                    <div className="start">0:00</div>
                    <div className="bar"></div>
                    <div className="end">{props.data.arr[song_number].song_length}</div>
                </div>
                <div className="song_list">
                    {songs}
                </div>
            </div>
        </div>
    )
}
export default Player;
const Timer = (props)=>{

    const {s, m, play} = useSelector(state => state.discography);

    let playSong = play;
    let timer = 0;
    let ss = s;
    let mm = m;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(play === true){
            si2 = setInterval(()=>{
                dispatch({type: 'changeS'});
                if(timer >= props.song_length_s){
                    dispatch({type: 'resetSong'});
                    f.cl_Int(si2);
                }
                timer += 1;
            },1000);
        }
        if (playSong === false){
            f.cl_Int(si2);
        }
        return ()=>{
            f.cl_Int(si2);
        }
    }, [play]);
    return (
        <div>
            <span>{mm}</span>:<span>{ss < 10 ? "0" + ss : ss}</span>
        </div>
    )
}

const Song = (props)=> {
    const {index, name, length} = props;
    const dispatch = useDispatch();
    return (
        <div className="song flexCC" data-index={index} onClick={()=>dispatch({type: 'changeSong', payload: index})}>
            <div className="song_name flexCC">{name}</div>
            <div className="song_length flexCC">{length}</div>
        </div>
    )
}