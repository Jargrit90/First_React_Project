import './member.css';
import React from 'react';
import * as f from  '../functions';
import {useSelector, useDispatch} from 'react-redux';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
function Member(props){
    let member_num = props.data;
    let member = useSelector(state => state.member.members[props.data]);
    let index = 0;
	const photo = member.photos.map((photo, index)=> <div key={index} className="photo flexCC"><img data-num={index} src={photo}/></div>);
    return (
        <>
            <div className="member">
                <div className="main">Nick: <span className="member_data">{member.nick}</span></div>
                <div className="main">Imię i Nazwisko: <span className="member_data">{member.name}</span></div>
                <br />
                <br />
                <div className="sub">Angielskie imię: <span className="member_data">{member.english_name}</span></div>
                <div className="sub">Pozycja w zespole: <span className="member_data">{member.position}</span></div>
                <div className="sub">Data urodzenia: <span className="member_data">{member.birth_date}</span></div>
                <div className="sub">Miejsce urodzenia: <span className="member_data">{member.birth_place}</span></div>
                <div className="sub">Wysokość: <span className="member_data">{member.height}</span></div>
                <div className="sub">Waga: <span className="member_data">{member.weight}</span></div>
                <div className="sub">Znak zodiaku: <span className="member_data">{member.zodiac_sign}</span></div>
                <div className="sub">Grupa krwi: <span className="member_data">{member.blood_type}</span></div>
                <div className="sub">Koszmar: <span className="member_data">{member.nightmare_role}</span></div>
                <div className="photos flexCC">
                    {photo}
                </div>
                {/*
                this.state.isPhotoMaxActive
                ?
                <div className="photo_max flexCC">
                    <img src={this.state.photoSrc} />
                    <div className="right_arrow"><i class="fa-solid fa-chevron-right icon"></i></div>
                    <div className="left_arrow"><i class="fa-solid fa-chevron-left icon"></i></div>
                    <div className="close flexCC"><i class="fa-solid fa-xmark icon"></i></div>
                </div>
                :
                null
                */}
            </div>
        </>
    )
}
export default Member;