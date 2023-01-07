import { Link } from "react-router-dom";
import React from "react";

export default function Nav(props){
    return (<>
    
        <div className="nav">

            <Link to="/">
                <div>HOMEPAGE</div>
            </Link>

            <Link to="/about">
                <div>
                    ABOUT
                </div>
            </Link>

            <Link to="/stocks">
                <div>STOCKS</div>
            </Link>

        </div>

    </>)
}