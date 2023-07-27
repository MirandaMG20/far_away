import React from 'react';

function Item({ item, onDeleteItem, onToggle }) {

    const handleDelete = () => {
        onDeleteItem(item.id)
    }

    const handleToggleItem = () => {
        onToggle(item.id)
    }

    return (
        <div>
            <li>
                {/* <input type='checkbox' onClick={() => onToggle(item.id)} /> other option of doing the next line */}
                <input type='checkbox' onClick={handleToggleItem} />
                <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                    {item.quantity} {item.description}
                </span>
                <button onClick={handleDelete}> ❌ </button>
            </li>
        </div>
    );
}

export default Item;