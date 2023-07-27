import React from 'react'

const Stats = ({ items }) => {

    const numItems = items.length // track how many items are in the array

    const numPacked = items.filter(item => item.packed).length

    const percentage = Math.round((numPacked / numItems) * 100)

    return (
        <footer className='stats'>
            {/* if percentage equals 100 render you have everything packed. You're ready to go */}
            {percentage === 100 ? "You have packed everything. 😎 You are ready to go! ✈" :
                <em>
                    {''}
                    🎒 You have {numItems} items on your list, and you have packed
                    {' '}
                    {numPacked} ({percentage}%)
                </em>
            }
        </footer>
    )
}

export default Stats