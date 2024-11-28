import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';

export default function UserDetails() {

    const { userId } = useParams();

    const getUsers = async () => {
        const userUrl = `https://jsonplaceholder.typicode.com/albums${userId}`
        try {
            const response = await axios.get(userUrl)
            this.setState({ users: response.data })
            return response.data
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getUsers()
        return () => {
            console.log("After effect")
        }
    }, [])

    return (
        <div>
            <h2>User Albums</h2>
            <p>User Album Information: </p>
        </div>
    )
}
