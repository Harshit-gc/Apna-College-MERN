import "./Product2.css";

function Product3({title, price}){
    let styles = { backgroundColor: price>30000 ? "pink" : ""};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>price:- {price}</h5>
        </div>
    );
}

export default Product3;