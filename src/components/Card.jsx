//API_KEY=live_bsvLX0kEsj2ttcdw51BCNn0xpqkod161vRxt3T2gWz8zwF9dh05sh8eSi8yDAIMq
const Card = ({key, url}) => {

    return (
        <div key={key} className="card">
            <img src={url} alt="cat" />
        </div>
    )
}

export default Card;