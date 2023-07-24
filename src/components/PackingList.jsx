import React from 'react'
import Item from './Item'

function PackingList({ items, onDeleteItem }) {
    return (
        <div className='list'>
            <ul>
                {items.map((item) => (
                    <Item 
                    item={item} 
                    key={item.id} 
                    onDeleteItem={onDeleteItem}
                    />
                ))}
            </ul>
        </div>
    )
}

export default PackingList