import React, { useEffect, useState} from 'react';
import API from '../../utils/API';

function List() {
    const [data, setData] = useState([]);

    useEffect(() => {
        API.getAll()
        .then(res => setData(res.data));
    }, []);

    return (
    <div className = 'col-8 card w-75'>
        <div className = 'card-body text-center'>
            <h5>List of Characters Here</h5>
                <ul className="list-group search-results">
                    {data.map(item => (
                        <li className = 'list-group-item row' key = {item.id}>
                            <h4 className = 'text-left card-content card-header'>{item.name}</h4>
                                <ul className = 'text-capitalize'>{item.role}</ul>
                                <ul>{item.house}</ul>
                                <ul>{item.school}</ul>
                                <ul className = 'text-capitalize'>{item.species}</ul>
                        </li>
                    ))}
                </ul>
        </div>
    </div>
    )
}
export default List;