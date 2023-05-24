import { useEffect, useState, useRef } from "react";
import Card from "./Card";
const CardContainer = () => {
    let effectRan = useRef(false);
    let [catsArray, setCatsArray] = useState([]);
    useEffect(() => {
        if(!effectRan.current){
            const fetchCats = async () => {
                let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
                let data = await response.json();
                setCatsArray(data);
            }
            fetchCats();
            effectRan.current = true;
        }
    }, [])
    return (
        <div className="cardContainer">
            {
                catsArray.map((cat) => 
                    <Card key={cat.id} url={cat.url}></Card>
                )
            }
        </div>
    )
}

export default CardContainer;