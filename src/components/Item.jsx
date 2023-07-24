import React from 'react';

function Item({ item, onDeleteItem }) {

    const handleDelete = () => {
        onDeleteItem(item.id)
    }

    return (
        <div>
            <li>
                <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                    {item.quantity} {item.description}
                </span>
                <button onClick={handleDelete}> ❌ </button>
            </li>
        </div>
    );
}

export default Item;