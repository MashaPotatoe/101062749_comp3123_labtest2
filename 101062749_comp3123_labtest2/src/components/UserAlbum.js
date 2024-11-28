import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { createContext } from 'react';
import './UserL.css'

class UserAlbum extends Component {
    constructor(props){
        super(props);
    }
    state ={
        albums: []
    }

    componentDidMount(){
        
    axios.get(`https://jsonplaceholder.typicode.com/albums`)
    .then(res => {
        const albums = res.data;
        this.setState({albums});
    })
    }
    render(){
        return(
            <ul>
                {
                    this.state.albums
                    .map(album =>
                        <li key={album.id}>{album.title}</li>
                    )
                }
            </ul>
        )
    }
   
};

export default UserAlbum;
