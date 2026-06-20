import { useState } from "react";

export default function HandlingMultipleInput() {
    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    }); 

    let handleInput = (event) => {
        setFormData((prevData)=> (
            {...prevData, [event.target.name]: event.target.value}
        ));
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Handling Multiple Input</h3>
            <label htmlFor="name">Full Name: </label>
            <input placeholder="Enter Full Name" id="name" name="fullName" onChange={handleInput} value={formData.fullName}/>
            <label htmlFor="username">Username: </label>
            <input placeholder="Enter Username" id="username" name="userName" onChange={handleInput} value={formData.userName}/>
            <label htmlFor="pass">Password: </label>
            <input placeholder="Enter Password" id="pass" name="password" onChange={handleInput} value={formData.password}/>
            <button>Submit</button>
        </form>
    );
}