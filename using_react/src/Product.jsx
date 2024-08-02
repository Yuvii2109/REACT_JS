// Product.jsx code 

import "./Product.css"
import Price from "./Price";

function Product({title,index}) {
    let oldPrice = ["1,39,990","84,990","24,450","11,999"];
    let newPrice = ["1,15,999","75,660","19,499","9,199"];
    let description = [
        ["Perfect laptop for Yuvraj Sachdeva",
        "He'll get it soon"],
        ["Perfect phone for Yuvraj Sachdeva",
        "He'll get this too"],
        ["Perfect AirPods for Yuvraj Sachdeva",
        "Baar baar likhoon kya ab?"],
        ["Perfect Pen for Yuvraj Sachdeva",
        "Baad main dekhte hain lena toh hai"]
    ]
    return (
        <div className="product">
            <div style={{marginLeft: "1rem"}}>
                <h3><u><i>{title}</i></u></h3>
            </div>
            <ul className="list">
                <li>{description[index][0]}</li>
                <li>{description[index][1]}</li>
            </ul>
            <br />
            <Price oldPrice={oldPrice[index]} newPrice={newPrice[index]}/>
        </div>
    );
}
export default Product;