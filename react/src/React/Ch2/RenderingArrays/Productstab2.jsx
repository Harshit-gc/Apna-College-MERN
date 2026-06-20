import Product2 from "./Product2";
import Product3 from "./Product3";

function Productstab2() {
    let options = [<li key={1}>hi-tech</li>, <li key={2}>durable</li>, <li key={3}>cheap</li>];
    return (
        <div>
            <h3>Rendering Arrays</h3>
            <Product2 title="Phone" price="20" features = {options}/>
            <h3>Dynamic Component Styling</h3>
            <Product3 title="Laptop" price="40000"/>
        </div>
    );
}

export default Productstab2;