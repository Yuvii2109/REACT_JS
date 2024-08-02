// Price.jsx code 

import "./Price.css";

export default function Price({oldPrice,newPrice}){
    let oldStyle = {
        textDecorationLine: "line-through"
    };
    let newStyle = {
        fontWeight: "700",
        fontStyle: "italic"
    };
    return(
        <div className="price">
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}