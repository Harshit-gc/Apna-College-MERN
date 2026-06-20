import Product1 from "./Product1";

function Productstab1() {
    let options = ["hi-tech", "durable", "cheap"];
    let options2 = {a: "hi-tech", b: "durable", c: "cheap"};
    return (
        <div>
            <h3>Paasing Arrays and Objects as Props</h3>
            <p>Passing Arrays</p>
            <Product1 title="Phone" price="20" features = {options}/>
            {/* OR
            <Product1 title="Phone" price="20" features = {["hi-tech", "durable", "cheap"]}/>
            */}
            {/* 
            <p>Passing Objects</p>
            <Product1 title="Laptop" price="30" features = {options2}/> 
            */}
            {/* OR
            <Product1 title="Phone" price="20" features = {{a: "hi-tech", b: "durable", c: "cheap"}}/>
            */}
        </div>
    );
}

export default Productstab1;