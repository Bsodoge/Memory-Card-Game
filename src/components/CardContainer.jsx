
import Card from "./Card";
const CardContainer = ({onClick, catsArray}) => {
    return (
        <div className="cardContainer">
            {
                catsArray.map((cat) => 
                    <Card onClick={onClick} cardid={cat.id} key={cat.id} url={cat.url}></Card>
                )
            }
        </div>
    )
}

export default CardContainer;