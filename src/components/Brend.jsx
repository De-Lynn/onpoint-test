import Plate from '../svg/brend/plate.svg'
import Calendar from '../svg/brend/calendar.svg'
import { PinkButton } from "./PinkButton";
import { BrendText } from "./BrendText";
import bg3 from '../img/bg3.png'
import Bottle from '../svg/brend/bottle.svg'

import { useState } from "react";
import CloseBtn from '../svg/brend/btn_close.svg'
import { AdvantagesListItem } from "./AdvantagesListItem";
import SimpleArrow from '../svg/brend/simple-arrow.svg'
import FullDot from '../svg/brend/full-dot.svg'
import EmptyDot from '../svg/brend/empty-dot.svg'

import Bubble5 from '../svg/brend/bubbles/bubble-5.svg'
import Bubble6 from '../svg/brend/bubbles/bubble-6.svg'
import Bubble7 from '../svg/brend/bubbles/bubble-7.svg'
import Bubble8 from '../svg/brend/bubbles/bubble-8.svg'

import Bubble1 from '../svg/brend/bubbles/bubble-1.svg'
import Bubble2 from '../svg/brend/bubbles/bubble-2.svg'
import Bubble3 from '../svg/brend/bubbles/bubble-3.svg'
import Bubble4 from '../svg/brend/bubbles/bubble-4.svg'
import '../css/Brend.scss'

const advantagesList = [
    {id: 1, number: '01', text: 'Lorem ipsum dolor sit amet, consectetur iscing elit'},
    {id: 2, number: '02', text: 'Faucibus pulvinar elementum integer enim'},
    {id: 3, number: '03', text: 'Faucibus pulvinar elementum integer enim'},
    {id: 4, number: '04', text: 'Mi bibendum neque egestas congue quisque egestas diam'},
    {id: 5, number: '05', text: 'Venenatis lectus magna fringilla urna'},
    {id: 6, number: '06', text: 'Venenatis lectus magna fringilla urna'},
]

const style = {
    background: `url(${bg3}) no-repeat`,
    backgroundSize: '100%',
}
const advantagesStyle = {
    background: `url(${bg3}) no-repeat`,
    backgroundSize: '100%',
    backgroundBlendMode: 'multiply',
    backgroundColor: 'rgba(22, 39, 62, 0.7)',
}

const pages = [{id: 1}, {id: 2}]

export const Brend = (props) => {
    const [activePageNumber, setActivePage] = useState(1)

    const toNextPage = () => {
        if (activePageNumber+1 > pages.length) return
        setActivePage(activePageNumber+1)
    }

    const toPrevPage = () => {
        if (activePageNumber === 1) return
        setActivePage(activePageNumber-1)      
    }

    const [isAdvantagesDisplay, setAdvantagesDisplay] = useState(false)
    const openAdvantages = () => {
        setAdvantagesDisplay(true)
    }

    const closeAdvantages = () => {
        setAdvantagesDisplay(false)
    }

    return (
        <div className={`brend ${isAdvantagesDisplay ? 'advantages' : '' } ${props.active ? 'active' : ''}`}
            style={!isAdvantagesDisplay ? style : advantagesStyle }
        >
            {!isAdvantagesDisplay && 
                <div className='brend__content _container'> {/*message */}
                    <BrendText title="Ключевое сообщение"/>
                    <div className="brend__description">
                        <div className="description__card big">
                            <Plate className="card__icon" viewBox='0 0 135 126'/>
                            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus 
                            vestibulum lorem sed risus ultricies
                        </div>
                        <div className="description__card small">
                            <Calendar className='card__icon' viewBox='0 0 140 115'/>
                            A arcu cursus vitae
                        </div>
                        <div className="description__button">
                            <PinkButton text="Подробнее" doAction={openAdvantages}>
                                +
                            </PinkButton>
                        </div>
                    </div>
                </div>
            }
            {isAdvantagesDisplay &&
                <div className="brend__content _container"> {/*advantages */}
                    <CloseBtn className="brend__close-btn" viewBox='0 0 67 69'
                        onClick={closeAdvantages}
                    />
                    <BrendText title="Преимущества"/>
                    <div className="brend__list">
                        {
                            advantagesList
                            .slice(3*(activePageNumber)-3, 3*(activePageNumber))
                            .map(el => <AdvantagesListItem key={el.id} number={el.number} text={el.text}/>)
                        }
                    </div>
                    <div className="brend__navigation">
                        <SimpleArrow className='navigation__arrow prev' viewBox='0 0 18 31'
                            onClick={toPrevPage}
                        />
                        <div className="navigation__pages">
                            {pages.map(el => {
                                if (el.id === activePageNumber) return <FullDot key={el.id} className='page__item' viewBox='0 0 21 21'/>
                                else return <EmptyDot key={el.id} className='page__item' viewBox='0 0 24 24'/>
                            })}
                        </div>
                        <SimpleArrow className='navigation__arrow next' viewBox='0 0 18 31'
                            onClick={toNextPage}
                        />
                    </div>
                </div>
            } 

            <Bottle className='bottle' viewBox='0 0 466 1377'/>
            <Bubble5 className='bubble-5 absolute ahead' viewBox='0 0 136 138'/>
            <Bubble6 className='bubble-6 absolute ahead' viewBox='0 0 285 285'/>
            <Bubble7 className='bubble-7 absolute ahead' viewBox='0 0 66 66'/>
            <Bubble8 className='bubble-8 absolute ahead' viewBox='0 0 149 149'/>
        
            <Bubble1 className='bubble-1 absolute behind' viewBox='0 0 68 68'/>
            <Bubble2 className='bubble-2 absolute behind' viewBox='0 0 225 224'/>
            <Bubble3 className='bubble-3 absolute behind' viewBox='0 0 74 76'/>
            <Bubble4 className='bubble-4 absolute behind' viewBox='0 0 123 123'/>
        </div>
    )
}