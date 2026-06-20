function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted Successfully");
}

export default function EventObject() {
    return(
        <div>
            <h3>Event Object In React</h3>
            <form onSubmit={handleSubmit}>
                <input placeholder="Write Something"/>
                <button>Submit</button>
            </form>
        </div>
    ); 
}