import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";
import './search.css'

const Searchy = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then(json => {
            const results = json.filter((album) => {
                return (value && 
                album && 
                album.title &&
                album.title.includes(value)
                );
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return(
        <div className="search">
            <FaSearch id="searchy"/>
            <input placeholder="Search Album Title" value={input} 
            onChange={(e) => handleChange(e.target.value)}/>

        </div>

    );
};

export default Searchy; 