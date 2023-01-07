import data from "../data.json"
import { Link } from "react-router-dom"



export default function Dashboard(props){



    return (<>
    
    <div className="stocks">
        {data.map((stock, index) => {
            const {name, symbol } = stock
            return (
                <Link to={`/stocks/${symbol}`} key={index}>
                    <h2>{name} - {symbol}</h2>
                </Link>
            )
        })}
    </div>
    
    </>)
}
