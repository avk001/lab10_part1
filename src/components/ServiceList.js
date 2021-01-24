import React from 'react';
import {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {removeService, edittingService} from '../actions/actionCreators';

function ServiceList(props) {
    const [filter, setFilter] = useState({
        name: ''
    });

    const items  = useSelector(state => state.serviceList);

    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch(removeService(id))
    }

    const handleFilterChange = (event) => {
        setFilter(prevForm => ({...prevForm, name: event.target.value}));
        event.persist()
    }

    const handleEdit = (name, price, id) => {
        dispatch(edittingService(name, price, id));
    }

    return (
        <div>
            <div>
                Фильтер:&nbsp;
                <input type="text" onChange={handleFilterChange} />
            </div>
            <ul>
                {items.filter(item => item.name.includes(filter.name)).map(o => (
                    <li key={o.id}>
                        {o.name} - {o.price}
                        <button onClick={() => handleRemove(o.id)}>X</button>
                        <button onClick={() => handleEdit(o.name, o.price, o.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}



export default ServiceList
