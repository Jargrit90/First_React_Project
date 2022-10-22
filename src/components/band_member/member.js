import './member.css';
import React, {useEffect} from 'react';
import * as f from  '../functions';
import {useSelector, useDispatch} from 'react-redux';
let sp = 0;
let sp2 = 0;
function Member(props){

    const {members, gallery_active, subPhotoSrc, num_of_photo} = useSelector(state => state.member);
    const {data} = props;

    let member_num = data;
    let member = members[data];
    let galleryActive = gallery_active;
    let gallery_length = members[data].photos.length;
    let photoSrc = subPhotoSrc;
    let index = 0;
    const dispatch = useDispatch();
    let np = num_of_photo;
	const photo = member.photos.map((photo, index)=> <div key={index} onClick={()=>{dispatch({type: 'activeGallery', payload: [data, index]}); sp2=index}} className="photo flexCC"><img data-num={index} src={photo}/></div>);
    
    useEffect(()=> {
        dispatch({type: 'changeMember', payload: data});
    }, []);
    console.log(np, sp2, gallery_length);
    
    const {nick, name, english_name, position, birth_date, birth_place, height, weight, zodiac_sign, blood_type, nightmare_role} = member;

    return (
        <>
            <div className="member">
                <div className="main">Nick: <span className="member_data">{nick}</span></div>
                <div className="main">Imię i Nazwisko: <span className="member_data">{name}</span></div>
                <br />
                <br />
                <div className="sub">Angielskie imię: <span className="member_data">{english_name}</span></div>
                <div className="sub">Pozycja w zespole: <span className="member_data">{position}</span></div>
                <div className="sub">Data urodzenia: <span className="member_data">{birth_date}</span></div>
                <div className="sub">Miejsce urodzenia: <span className="member_data">{birth_place}</span></div>
                <div className="sub">Wysokość: <span className="member_data">{height}</span></div>
                <div className="sub">Waga: <span className="member_data">{weight}</span></div>
                <div className="sub">Znak zodiaku: <span className="member_data">{zodiac_sign}</span></div>
                <div className="sub">Grupa krwi: <span className="member_data">{blood_type}</span></div>
                <div className="sub">Koszmar: <span className="member_data">{nightmare_role}</span></div>
                <div className="photos flexCC">
                    {photo}
                </div>
                {
                galleryActive
                ?
                <div className="photo_max flexCC">
                    <img src={photoSrc} />
                    <div className="right_arrow" onClick={()=>{
                        sp2+=1;
                        if(sp2 >= gallery_length){
                            sp2 = 0;
                        }
                        console.log(sp2);
                        dispatch({type: 'changePhotoInGallery', payload: [sp, sp2]})
                    }}>
                        <i className="fa-solid fa-chevron-right icon"></i>
                    </div>
                    <div className="left_arrow" onClick={()=>{
                        sp2-=1;
                        if(sp2 < 0){
                            sp2 = gallery_length - 1;
                        }
                        console.log(sp2);
                        dispatch({type: 'changePhotoInGallery', payload: [sp, sp2]})
                    }}><i className="fa-solid fa-chevron-left icon"></i></div>
                    <div className="close flexCC" onClick={()=>dispatch({type: 'closeGallery'})}><i className="fa-solid fa-xmark icon"></i></div>
                </div>
                :
                null
                }
            </div>
        </>
    )
}
export default Member;