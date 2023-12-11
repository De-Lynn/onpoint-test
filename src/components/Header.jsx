import HomeIcon from "../svg/header/home.svg";
import Separator from '../svg/header/vert-separator.svg'
import '../css/Header.scss'

export const Header = (props) => {

    const goToHome = () => {
        props.homeRef.current.scrollIntoView({ 
            block: 'nearest',
            behavior: 'smooth',
        });
    }
    
    return (
        <div className="header">
            <div className="header__content _container">
                <HomeIcon className="header__home" viewBox="0 0 43.875 38.438"
                    onClick={goToHome}/>
                <Separator className="header__separator" viewBox="0 0 4 52"/>
                <span className="header__text">Project</span>
            </div>
        </div>
    )
}