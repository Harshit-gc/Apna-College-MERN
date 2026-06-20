function hello(){
    console.log("Hello");
}

function Hovered(){
    console.log("Mouse is hovered on Paragraph.")
}

export default function Events() {
    return(
        <div>
            <h3>Handling Click Events</h3>
            <button onClick={hello}>Say Hello!!!</button>
            <h3>Handling Non-Click Events</h3>
            <p onMouseOver={Hovered}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aspernatur vel cumque molestias nostrum laborum voluptates voluptatem, consequatur magnam officiis placeat minus? Quae pariatur quo aperiam odit soluta commodi sapiente!</p>
        </div>
    );
}