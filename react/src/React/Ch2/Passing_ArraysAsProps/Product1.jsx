import "./Product1.css";

function Product1({title, price, features}){
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>price:- {price}</h5>
            <p>{features}</p>
            {/* Rendering Objects
            <p>{features.a}</p> 
            */}
        </div>
    );
}

export default Product1;