import React, {useRef, useState} from "react";
import '../css/App.scss'
import { Home } from "./Home";
import { Message } from "./Message";
import { Brend } from "./Brend";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const App = () => {
    const homeRef = useRef(null);
    const messageRef = useRef(null);

    const [pagesStatus, setPagesStatus] = useState([
        {id: 1, page: 'home', active: true},
        {id: 2, page: 'message', active: false},
        {id: 3, page: 'brend', active: false}
    ])

    const onScroll = (() => {
        var ticking = false;
    
        return (e) => {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    var documentScrollLeft = e.target.scrollLeft;
                    let newStatus
                    if (documentScrollLeft >= 0 && documentScrollLeft < 1024) {
                        newStatus = [...pagesStatus].map(el => {
                            if (el.page === 'home') return {...el, active: true}
                            else return {...el, active: false}
                        })
                    } else if (documentScrollLeft >= 1024 && documentScrollLeft < 2048) {
                        newStatus = [...pagesStatus].map(el => {
                            if (el.page === 'message') return {...el, active: true}
                            else return {...el, active: false}
                        })
                    } else if (documentScrollLeft >= 2048) {
                        newStatus = [...pagesStatus].map(el => {
                            if (el.page === 'brend') return {...el, active: true}
                            else return {...el, active: false}
                        })
                    }
                    setPagesStatus(newStatus)
            
                    ticking = false;
                });
                ticking = true;
            }
        };
    })();
    return (
        <div className="wrapper" onScroll={onScroll}>
            <Header homeRef={homeRef}/>
            <Home homeRef={homeRef} messageRef={messageRef} active={pagesStatus[0].active}/>
            <Message messageRef={messageRef} active={pagesStatus[1].active}/>
            <Brend active={pagesStatus[2].active}/>
            <Footer />
        </div>
    )
}