import React, { useState } from 'react'
import Header from './components/Header'
import List from './components/List';

function App() {
  const [selectedCategory,setSelectedCategory] = useState("");
  const [searchCategory,setSearchCategory] = useState("");
  
  

  return (
     <>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSearchCategory={setSearchCategory}
      />
      <List 
         selectedCategory={selectedCategory} 
         searchCategory={searchCategory}
      />
      <div>App Component Rendered</div>
      </>
   
  )
}

export default App
