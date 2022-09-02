import React from 'react';
import ItemList from './ItemList';

const Content = (items, handleId, handleDelete) => {

    return (
    
    <main>

        {Number(items.items.length) ? (        
           <ItemList
                items={items}
                handleId={handleId}
                handleDelete={handleDelete}
                />
        ) : (
        <p style={{marginTop: '2rem'}}>Your list is empty</p>
        )}    
    </main>
  )
}

export default Content