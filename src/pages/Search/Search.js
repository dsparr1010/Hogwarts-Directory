import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import SearchForm from '../../components/SearchForm/SearchForm';
import List from '../../components/List/List';
import Alert from '../../components/Alert/Alert';
import WizardContent from '../../utils/WizardContext';
import SearchResults from '../../components/SearchResults/SearchResults';

function Search() {
    const [search, setSearch] = useState({
        name: '',
        role: '',
        school: '',
        species: ''
    });

    const handleInputChange = event => {
        setSearch(event.target.value)
        console.log('werk');
    };

    const handleFormSubmit = event => {
        event.preventDefault();
      };

    return(
        <WizardContent.Provider value={search}>
            <div>
                <SearchForm             
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                results={search}>
                </SearchForm>
            </div>
        </WizardContent.Provider>
    )
}

export default Search;