import React, {useRef} from "react";
import '../css/App.scss'
import { Home } from "./Home";
import { Message } from "./Message";
import { Brend } from "./Brend";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const App = () => {
    const homeRef = useRef(null);
    const messageRef = useRef(null);
    const brendRef = useRef(null);

    const onScroll = (() => {
        var ticking = false;
    
        return (e) => {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    var documentScrollLeft = e.target.scrollLeft;
                    if (documentScrollLeft >= 0 && documentScrollLeft < 1024) {
                        if (homeRef.current) {
                            if (!homeRef.current.classList.contains('active')) {
                                homeRef.current.classList.add('active'); 
                                messageRef.current.classList.remove('active'); 
                                brendRef.current.classList.remove('active'); 
                            }
                        }
                    } else if (documentScrollLeft >= 1024 && documentScrollLeft < 2048) {
                        if (messageRef.current) {
                            if (!messageRef.current.classList.contains('active')) {
                                messageRef.current.classList.add('active'); 
                                homeRef.current.classList.remove('active'); 
                                brendRef.current.classList.remove('active'); 
                            }
                        }
                    } else if (documentScrollLeft >= 2048) {
                        if (brendRef.current) {
                            if (!brendRef.current.classList.contains('active')) {
                                brendRef.current.classList.add('active'); 
                                messageRef.current.classList.remove('active'); 
                                homeRef.current.classList.remove('active'); 
                            }
                        }
                    }
            
                    ticking = false;
                });
                ticking = true;
            }
        };
    })();
    return (
        <div className="wrapper" onScroll={onScroll}>
            <Header />
            <Home homeRef={homeRef}/>
            <Message messageRef={messageRef}/>
            <Brend brendRef={brendRef}/>
            <Footer />
        </div>
    )
}