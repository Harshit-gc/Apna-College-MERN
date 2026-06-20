import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("Rahul");

    let handleChange = (event) => {
        setName(event.target.value);
    }

    return(
        <form>
            <h3>Forms in React</h3>
            <h5>Controlled Component</h5>
            <label htmlFor="fullName">Name: </label>
            <input placeholder="Enter Name:" onChange={handleChange} value={name} id="fullName"/>
            <button>Submit</button>
        </form>
    );
}


// Example Of Uncontrolled Component
// function MyForm() {
//   const nameRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name:", nameRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" ref={nameRef} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }