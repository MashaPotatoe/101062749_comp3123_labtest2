import React from "react";
import './result.css'

export const SearchResults = ({results}) => {
    return(
        <div className="result">
        {results.map((result, id) => {
        return <div key={id}>{result.title} </div>
        })}
        </div>
    );
};

export default SearchResults; 