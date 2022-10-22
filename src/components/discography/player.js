import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import './discography.css';
import * as f from  '../functions';
let si2;
let x = f.g(".myAudio");
function Player(props) {

    const {name, arr} = props.data;
    const {song_num, play, timer} = useSelector(state => state.discography);

    let song_number = song_num;
    let song_length = useSelector(state => arr[song_number].song_length_s);
    let playSong = play;
    let disc = useSelector(state => name);
    const dispatch = useDispatch();
    let index = 0;
    let songs = arr.map(song => <Song index={index} song_num={index} name={song.title} length_in_sec={song.song_length_s} length={song.song_length} key={index++}/>);
    if (playSong === 'stop'){
        f.cl_Int(si2);
        x[0].load();
    }
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
                    <audio className="myAudio">
                        <source src={props.data.arr[song_number].song_file} type="audio/mpeg" />
                    </audio>
                    <div onClick={()=>dispatch({type: 'playSong', payload: 'play'})}><i className="fa-solid fa-play"></i></div>
                    <div onClick={()=>dispatch({type: 'playSong', payload: 'pause'})}><i className="fa-solid fa-pause"></i></div>
                    <div onClick={()=>dispatch({type: 'resetSong', payload: 'stop'})}><i className="fa-solid fa-stop"></i></div>
                </div>
                <div className="song_length_bar flexCC">
                    <div className="start">0:00</div>
                    <Bar song_l={props.data.arr[song_number].song_length_s}/>
                    <div className="end">{props.data.arr[song_number].song_length}</div>
                </div>
                <div className="song_list">
                    {songs}
                </div>
                <div>
                    Piosenki użyte w projekcie nie należą do mnie, używane są jedynie do ukazania funkcjonalności projektu, nie ma to na celu formy zarobkowej!
                </div>
            </div>
        </div>
    )
}
export default Player;

const Bar = (props)=>{
    const {timer} = useSelector(state => state.discography);
    let percent_bar = ((timer/props.song_l)*100).toFixed(0);
    return (
        <div className="bar">
            <div className="sub_bar" style={{"width": percent_bar+"%"}}></div>
        </div>
    )
}
const Timer = (props)=>{

    const {s, m, play, timer} = useSelector(state => state.discography);

    let playSong = play;
    let ss = s;
    let mm = m;
    
    const dispatch = useDispatch();
    useEffect(()=>{
        if(play === 'play'){
            x[0].play();
            si2 = setInterval(()=>{
                dispatch({type: 'changeS'});
                if(timer >= props.song_length_s){
                    dispatch({type: 'resetSong'});
                    f.cl_Int(si2);
                }
                
            },1000);
        }
        if (playSong === 'pause'){
            f.cl_Int(si2);
            x[0].pause();
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