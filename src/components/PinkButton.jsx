import '../css/PinkButton.scss'

export const PinkButton = ({children, ...props}) => {
    return (
        <button className="pink-button" onClick={props.doAction}>
            <div className="pink-button__item">
                {children}
            </div>
            <span className="pink-button__text">{props.text}</span>
        </button>
    )
}