import React from 'react'
import './Home.css'
import { useState } from 'react'

export default function Home() {
    const [state, setState] = useState({
        title:"",
        description:""
    })

    function handleChange(e){
        setState({ ...state, [e.target.name]: e.target.value });
    }
    function handleSubmit(e){

    }

    return (
        <>
            <div className="home">Home</div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" onChange={handleChange} required />
                <input type="text" name="description" onChange={handleChange} required/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
