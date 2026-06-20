import "./Product2.css";

function Product2({title, price, features}){
    // Using map function
    // let list = features.map((option) => <li>{option}</li>)
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>price:- {price}</h5>
            <ul>{features}</ul>
            {/* <p>{list}</p> */}
        </div>
    );
}

export default Product2;