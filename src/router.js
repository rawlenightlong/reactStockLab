import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import About from "./pages/about"
import Dashboard from "./pages/dashboard"
import Homepage from "./pages/homepage"
import Stock from "./pages/stock"
import data from "./data.json"
import Nav from "./components/nav"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
  
            <Route path="" element={<Homepage/>}/>
            <Route path ="about" element={<About/>}/>
            <Route path="stocks/:symbol" element={<Stock/>} data={data}/>
            <Route path="stocks" element={<Dashboard/>} data={data}/>

   
        </Route>
    )
)


export default router 