export const AdvantagesListItem = (props) => {
    return (
        <div className="list__item">
            <div className="item__number">{props.number}</div>
            <div className="item__text">{props.text}</div>
        </div>
    )
}