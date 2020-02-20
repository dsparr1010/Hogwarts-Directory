import React from 'react';


function CharCard(item){
    return(
        <div>
            <ul className="list-group search-results">
                <li className="list-group-item">
                    <h4>{item.name}</h4>
                    <li>{item.role}</li>
                    <li>{item.house}</li>
                    <li>{item.school}</li>
                </li>
            </ul>
        </div>
    )
}

export default CharCard;