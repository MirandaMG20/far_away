import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {

  const [items, setItems] = useState(initialItems); // or useState that initialize with an empty []

  const handleAddItems = (item) => {
    setItems([
      ...items, // prefer way to add new item in React for an arr
      item
    ])
  }

  const handleDeleteItem = (id) => { //give a new arr of items that pass the test
    setItems(items.filter(item => item.id !== id)) // filter out the id that matches obj id
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        // initialItems={initialItems} no longer need it
        items={items}
        onDeleteItem={handleDeleteItem}
      />
      <Stats />
    </div>
  )
}

export default App