import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import './discography.css';
import * as f from  '../functions';
let si2;

function Player(props) {
    let song_num = useSelector(state => state.discography.song_num);
    let song_length = useSelector(state => props.data.arr[song_num].song_length_s);
    let play = useSelector(state => state.discography.play);
    let disc = useSelector(state => props.data.name);
    const dispatch = useDispatch();
    let index = 0;
    let songs = props.data.arr.map(song => <Song index={index} song_num={index} name={song.title} length_in_sec={song.song_length_s} length={song.song_length} key={index++}/>);
    //console.log(song);

    return (
        <div className="flexCC">
            <div className="player flexCC">
                <div className="song_title">
                    Title
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
                    <div className="end">{props.data.arr[song_num].song_length}</div>
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
    let play = useSelector(state => state.discography.play);
    let timer = 0;
    let s = useSelector(state => state.discography.s);
    let m = useSelector(state => state.discography.m);
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
        if (play === false){
            f.cl_Int(si2);
        }
        return ()=>{
            f.cl_Int(si2);
        }
    }, [play]);
    return (
        <div>
            <span>{m}</span>:<span>{s < 10 ? "0" + s : s}</span>
        </div>
    )
}

const Song = (props)=> {
    const dispatch = useDispatch();
    return (
        <div className="song flexCC" data-index={props.index} onClick={()=>dispatch({type: 'changeSong', payload: props.index})}>
            <div className="song_name flexCC">{props.name}</div>
            <div className="song_length flexCC">{props.length}</div>
        </div>
    )
}