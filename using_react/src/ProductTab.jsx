// ProductTab.jsx code

import Product from "./Product.jsx";
import "./ProductTab.css"

function ProductTab() {
    return (
        <div className="product-tab">
            <Product title="MacBook" index={0}/>
            <Product title="IPhone" index={1}/>
            <Product title="AirPods Pro-2" index={2}/>
            <Product title="Apple Pencil (Gen-2)" index={3}/>
        </div>
    );
}
export default ProductTab;