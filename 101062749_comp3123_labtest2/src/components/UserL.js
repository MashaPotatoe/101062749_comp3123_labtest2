import React, {useState, useEffect, Button, Component} from "react";
import { useParams, Link } from 'react-router-dom'
import axios from "axios";
import styles from './UserL.css';
import { FaAngellist } from "react-icons/fa";

export default class UserL extends Component{
    constructor(props){
        super(props)
        this.state ={
            users: []
        }
    }

    getUser = async () => {
        const uUrl = "https://jsonplaceholder.typicode.com/users"
        try{
            const res = await axios.get(uUrl)
            this.setState({users: res.data})
            return res.data
        } catch (error){
            console.log(error)
        }
    }

    componentDidMount(){
        this.getUser();
    }

    render(){
        return(
            <div><h1 className={styles.Link}> <FaAngellist /> User List <FaAngellist /></h1>
            {
                this.state.users.map(user => (
                    <p key={user.id}>


                        <Link to={`/album`}>{user.name}</Link>
                    </p>
                ))
                 }
                
            </div>
        )
    }



}