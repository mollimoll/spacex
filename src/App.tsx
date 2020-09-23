import React, { useEffect, FC, useState } from "react"
import ProductListPage from "./components/ProductListPage"
import "./App.css"

const App: FC = () => {
  const [rockets, setRockets] = useState()
  const [dragons, setDragons] = useState()

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((data) => setRockets(data))
    fetch("https://api.spacexdata.com/v4/dragons")
      .then((response) => response.json())
      .then((data) => setDragons(data))
  }, [])

  return (
    <div className='App'>
      {rockets && dragons && (
        <ProductListPage rockets={rockets!} dragons={dragons!} />
      )}
    </div>
  )
}

export default App
