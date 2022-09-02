import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({items, item, handleId, handleDelete}) => {
  return (
        <li className='item'>
                <input 
                    type="checkbox"
                    onChange={() => items.handleId(item.id)}
                    checked={item.checked}
                />
                <label
                    onDoubleClick={() => items.handleId(item.id)}
                    style={(item.checked) ? {textDecoration: 'line-through'} : null}
                >{item.item}</label>
                <FaTrashAlt
                    onClick={() => items.handleDelete(item.id)} 
                    role="button" 
                    tabIndex="0" 
                    aria-label={`Delete ${item.item}`}
                    />
        </li>
  )
}

export default LineItem