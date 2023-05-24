const Card = ({cardid, url, onClick}) => {

    return (
        <div onClick={onClick} className="card">
            <img src={url} cardid={cardid} alt="cat" />
        </div>
    )
}

export default Card;