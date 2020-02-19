import React from "react";
import "./style.css";

import Header from "../Header/Header";
import SearchForm from '../SearchForm/SearchForm';
import List from '../List/List';
import WizardContext from '../../utils/WizardContext';
import SearchResults from '../SearchResults/SearchResults';

function CardContainer() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid card-container">
        <Header />
      </div>
      <div className="row">
        <SearchForm />
        <List />
      </div> 
    </div>
  );
}

export default CardContainer;
