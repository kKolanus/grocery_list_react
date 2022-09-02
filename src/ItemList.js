import React from 'react'
import LineItem from './LineItem'

const ItemList = ({items, handleId, handleDelete}) => {
  return (
    <ul>
    {items.items.map((item) => (
        <LineItem
            key={item.id}
            handleDelete={handleDelete}
            handleId={handleId}
            item={item}
            items={items}
        />
    ))}
    </ul>
  )
}

export default ItemList