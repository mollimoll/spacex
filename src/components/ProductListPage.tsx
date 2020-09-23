import React, { FC, useState } from "react"
import { Menu, Layout, Drawer, Row } from "antd"

import Card from "./Card"
import ExpandedInfo from "./ExpandedInfo"

import { Rocket } from "./types/Rocket"
import { Dragon } from "./types/Dragon"
import { Device } from "./types/Device"

const { Header, Footer } = Layout

type Devices = Device[]
type Props = {
  rockets: Rocket[]
  dragons: Dragon[]
}

const ProductListPage: FC<Props> = ({ rockets, dragons }) => {
  const [devices, setDevices] = useState(rockets as Devices)
  const [selected, setSelected] = useState("rockets")
  const [expanded, setExpanded] = useState({} as Device)
  const [open, setOpen] = useState(false)

  const onCardClick = (id: string) => {
    const device = devices.find((device) => device.id === id)
    setExpanded(device!)
    setOpen(true)
  }

  const handleClick = (e: any) => {
    setSelected(e.key)
    switch (e.key) {
      case "rockets":
        setDevices(rockets)
        break
      case "dragons":
        setDevices(dragons)
        break
    }
  }

  return (
    <>
      <Header>
        <h1 style={{ color: "white" }}>SpaceXplore</h1>
      </Header>
      <Menu
        style={{ textAlign: "center" }}
        onClick={handleClick}
        selectedKeys={[selected]}
        mode='horizontal'
      >
        <Menu.Item key='rockets'>Rockets</Menu.Item>
        <Menu.Item key='dragons'>Dragons</Menu.Item>
      </Menu>
      <Row
        style={{ paddingTop: "20px" }}
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
        justify='center'
      >
        {devices.map((device) => {
          const { flickr_images, name, description, id } = device
          return (
            <Card
              id={id}
              image={flickr_images[0]}
              name={name}
              description={description}
              onClick={onCardClick}
            />
          )
        })}
      </Row>
      <Drawer
        height='90vh'
        onClose={() => setOpen(false)}
        visible={open}
        placement='bottom'
      >
        <ExpandedInfo {...expanded} />
      </Drawer>
      <Footer>
        <p>Made by Molly Boyle | 2020</p>
      </Footer>
    </>
  )
}

export default ProductListPage
