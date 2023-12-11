import Arrow from '../svg/home/arrow.svg'
import Bacteria from '../svg/home/bacteria.svg'
import BigSperm from '../svg/home/pink_sperm_1.svg'
import SmallSperm from '../svg/home/pink_sperm.svg'
import Bakti1 from '../svg/home/bakti_1.svg'
import Bakti2 from '../svg/home/bakti_2.svg'
import Bakti3 from '../svg/home/bakti_3.svg'
import Bakti4 from '../svg/home/bakti_4.svg'
import Virus1 from '../svg/home/virus.svg'
import Virus2 from '../svg/home/virus2-3.svg'
import bg1 from '../img/bg.png'
import { PinkButton } from './PinkButton'
import '../css/Home.scss'

export const Home = (props) => {

    const goToMessage = () => {
        props.messageRef.current.scrollIntoView({ 
            block: 'nearest',
            behavior: 'smooth', 
        });
    }

    return (
        <div className={`home ${props.active ? 'active' : ''} `} ref={props.homeRef}>
            <style dangerouslySetInnerHTML={{
                __html:`
                    .home {
                        background: url(${bg1}) no-repeat;
                        background-size: 100%;
                    }
                `
            }}></style>
            <div className="home__content _container">
                <div className="home__hello">Привет,</div>
                <span className="home__text">
                    Это 
                    <span className="home__text bold"> не </span>
                    коммерческое задание
                </span>
                <div className='home__button'>
                    <PinkButton text='Что дальше?' doAction={goToMessage}>
                        <Arrow className="item__arrow" viewBox="0 0 39 28"/>
                    </PinkButton>
                </div>
            </div>

            <Bacteria className="bacteria absolute" viewBox='0 0 428 231'/>
            <BigSperm className='big-sperm absolute' viewBox='0 0 1183 185'/>
            <SmallSperm className='small-sperm absolute' viewBox=' 0 0 827 366'/>
            <Bakti1 className='bakti-1 absolute' viewBox='0 0 146 142'/>
            <Bakti2 className='bakti-2 absolute' viewBox='0 0 125 114'/>
            <Bakti3 className='bakti-3 absolute' viewBox='0 0 142 137'/>
            <Bakti4 className='bakti-4 absolute' viewBox='0 0 169 155'/>
            <Virus1 className='virus-1 absolute' viewBox='0 0 221 227'/>
            <Virus2 className='virus-2 absolute' viewBox='0 0 455 448'/>
        </div>
    )
}