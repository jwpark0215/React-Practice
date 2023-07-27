import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios";

function Users(){
    const {id} = useParams()
    const [information, setInformation] = useState({}) 
    
    async function getusers(){
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setInformation(data)
    } 

    useEffect(() => {
        getusers()
    }, [])

    return (
        <div>
            <div>{information.name}</div>
        </div>
    )
        
}

export default Users