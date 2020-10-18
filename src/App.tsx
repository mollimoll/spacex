import React, { useEffect, FC, useState } from "react"
import { Layout } from "antd"
import ProductListPage from "./components/ProductListPage"
import "./App.css"
import Header from "./components/Header"

const { Footer } = Layout

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
      <Header />
      {rockets && dragons ? (
        <ProductListPage rockets={rockets!} dragons={dragons!} />
      ) : (
        "Loading"
      )}
      <Footer>
        <p>Made by Molly Boyle | 2020</p>
      </Footer>
    </div>
  )
}

export default App
