import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function SearchForm() {

  const [data, setData] = useState({})
  const [char, setChar] = useState("Harry Potter")
  const [searchValue, setSearchValue] = useState("Harry Potter")

  const handleClick = () => {
    setSearchValue(char)
  }

  useEffect(() => {
    API.getCharacter(searchValue)
    .then(res => {
      console.log(res)
      setData(res.data[0])
    })
  }, [searchValue])


    return(
        <div className="col card w-75">
            <div className="card-body text-center">
                <h5 className="card-title">Search for a character</h5>
                <h5 className="card-subtitle mb-2 text-muted">Use first and last name to search</h5>
                <div className="input-group mb-3 mx-auto d-flex justify-content-center">
                    <form className="search form-group ">
                        <input 
                        value={char}
                        onChange = {e => setChar(e.target.value)}
                        type="text" 
                        className="form-control" 
                        aria-label="Default"
                        id="name"
                        >
                        </input>
                        <button onClick = {handleClick} type = "button">Search</button>
                    </form>
                    <li className = 'list-group-item'>
                    <h3 className = 'card-header'>{data.name}</h3>
                        <ul className = 'text-capitalize'>{data.role}</ul>
                        <ul>{data.house}</ul>
                        <ul>{data.school}</ul>
                        <ul className = 'text-capitalize'>{data.species}</ul>
                    </li>    
                </div>
            </div>
        </div>
    )
};

export default SearchForm;