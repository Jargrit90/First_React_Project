import React from "react";
import {Y2014, Y2017, Y2018, Y2019} from './years';
import * as f from  '../functions';
import {useSelector, useDispatch} from 'react-redux';
import './band.css';
function Band(){
    let arr = [<Y2014/>, <Y2017/>, <Y2018/>, <Y2019/>];
    //let active_num = useSelector(state => state.submenu.active_year);
    //<button onClick={()=>dispatch({type: 'changeValue_2'})}>Zmień v2</button>
    let active_num = useSelector(state => state.mainpage.active_num);
    const dispatch = useDispatch();

    const onMouseOverHandler = (event, image) => {
        let x = event.clientX;
        let y = event.clientY;
        let window_width = window.innerWidth;
        let image_container = f.g(".image_container");
        if(x >= (window_width/2)){
            f.change_element(image_container, 0, ["style", "display", "block", "right", (window_width - x + 20) + "px", "left", null, "width", "200px", "height", "400px", "top", (y - 200) + "px", "background-image", "url("+image+")"]);
        }
        else {
            f.change_element(image_container, 0, ["style", "display", "block", "left", (x + 20) + "px", "right", null, "width", "200px", "height", "400px", "top", (y - 200) + "px", "background-image", "url("+image+")"]);
        }
    }
    const onMouseLeaveHandler = () => {
        let image_container = f.g(".image_container");
        f.change_element(image_container, 0, ["style", "background-image", "null", "display", "none"]);
    }

    return (
        <>
            <div className="band_page">
                <div className="flexCC logo">
                    <img src="../../../images/dc_logo.png" alt="Dc_logo"/>
                </div>
                <div className="about_band">
                    <div className="image_container"></div>
                    Dreamcatcher (kor. 드림캐쳐, wcześniej znany jako MINX) – południowokoreański girlsband założony przez Happy Face Entertainment. W skład zespołu wchodzi siedem członkiń
                    : 
                    <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/jiu1.png")}><b>JiU</b></span>
                    , <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/sua1.png")}><b>SuA</b></span>
                    , <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/siyeon1.png")}><b>Siyeon</b></span>
                    , <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/handong1.png")}><b>Handong</b></span>
                    , <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/yoohyeon1.png")}><b>Yoohyeon</b></span>
                    , <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/dami1.png")}><b>Dami</b></span> oraz <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/gahyeon1.png")}><b>Gahyeon</b></span>. 
                    Zadebiutowały 13 stycznia 2017 roku wydając CD singel Nightmare (hangul: 악몽, hancha: 惡夢)). Grupa powstała jako MINX i 
                    składała się z pięciu członkiń <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/jiu2.png")}><b>JiU</b></span>
                    , <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/sua2.png")}><b>SuA</b></span>
                    , <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/siyeon2.png")}><b>Siyeon</b></span>
                    , <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/yoohyeon2.png")}><b>Yoohyeon</b></span> i <span onMouseLeave={()=> onMouseLeaveHandler()} onMouseEnter={(event)=> onMouseOverHandler(event, "../../../images/dami2.png")}><b>Dami</b></span>. 18 września 2014 roku wydały debiutancki singel „Why Did You Come To My Home?” (kor. 우리 집에 왜 왔니). 
                    W lipcu 2015 roku ukazał się minialbum Love Shake, który był ostatnim wydawnictwem grupy jako MINX. W listopadzie 2016 roku członkinie ogłosiły, że ponownie zadebiutują w
                    2017 roku pod nową nazwą Dreamcatcher, z dodatkiem dwóch nowych członkiń. (info: wikipedia) 
                </div>
                <div className="history">
                    <div className="part_title flexCC">
                        Historia zespołu
                    </div>
                    <div className="history_buttons_container flexCC">
                        <div className="history_button" onClick={()=>dispatch({type: 'changeYear', payload: 0})}>2014/2015</div> 
                        <div className="history_button" onClick={()=>dispatch({type: 'changeYear', payload: 1})}>2017</div> 
                        <div className="history_button" onClick={()=>dispatch({type: 'changeYear', payload: 2})}>2018</div> 
                        <div className="history_button" onClick={()=>dispatch({type: 'changeYear', payload: 3})}>2019 - teraz</div>
                    </div>
                    {arr[active_num]}
                </div>
            </div>
        </>
    )
}
export default Band;
