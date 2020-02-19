import React, { useContext } from "react";
import WizardContext from '../../utils/WizardContext';

function SearchResults() {
const {name, role, school, species} = useContext(WizardContext);

return(
    <ul className="list-group search-results">
    <li className="list-group-item">
      <h2>{name}</h2>
      <ul>
        {role}
        {school}
        {species}
      </ul>
    </li>
  </ul>
)
}

export default SearchResults;