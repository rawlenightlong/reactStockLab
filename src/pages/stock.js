import data from "../data.json"
import { Link, useParams } from "react-router-dom"

export default function Stock(props){
    
    const symbol = useParams().symbol
    console.log(symbol)
    
   for (let stock of data){
    if (stock.symbol === symbol){
        console.log(stock)
        return (<>
    
            <h1>{stock.name}</h1>
            <h2>Symbol: {stock.symbol}</h2>
            <h3>Last Price (USD) - ${stock.lastPrice}</h3>
            <h3>Opening Price: ${stock.open}</h3>
            <h3>High: ${stock.high}</h3>
            <h3>Low: {stock.low}</h3>
            <h4>Price Change: ${stock.change}</h4>
            <button><Link to="/stocks">Back To Stocks</Link></button>
            
            </>)

    }

   }
    

}