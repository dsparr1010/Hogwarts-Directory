import React from 'react';


function SearchForm(props) {
    return(
        <div className="col card w-75">
            <div className="card-body text-center">
                <h5 className="card-title">Search for a character</h5>
                <h5 className="card-subtitle mb-2 text-muted">Use first and last name to search</h5>
                <div className="input-group mb-3 mx-auto">
                    <form className="search form-group">
                        <input 
                        value={props.search}
                        onChange={props.handleInputChange}
                        placeholder="Hermoine Granger"
                        type="text" 
                        className="form-control" 
                        aria-label="Default"
                        list="name"
                        name="name"
                        id="name"
                        >
                        </input>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SearchForm;