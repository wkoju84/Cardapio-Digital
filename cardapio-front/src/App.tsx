import { useState } from 'react'
import './App.css'
import { Card } from './Components/Card/card';
import { useFoodData } from './Hooks/useFoodData';
import { CreateModal } from './Components/Create-modal/create-modal';

function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => <Card 
                                price = {foodData.price} 
                                title = {foodData.title} 
                                image = {foodData.image}/>)}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
        
    </div>
  )
}

export default App
