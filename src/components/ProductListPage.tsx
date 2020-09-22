import React, { FC, useState } from "react"
import { Button, Col, Drawer, Row } from "antd"

import Card from "./Card"
import ExpandedInfo from "./ExpandedInfo"

import { Rocket } from "./types/Rocket"
import { Dragon } from "./types/Dragon"
import { Device, DeviceBasics } from "./types/Device"

const expandedInfoKeys: Array<keyof DeviceBasics> = [
  "active",
  "description",
  "first_flight",
  "flickr_images",
  "name",
  "type",
  "wikipedia",
]

type Devices = Device[]
type Props = {
  rockets: Rocket[]
  dragons: Dragon[]
}

const ProductListPage: FC<Props> = ({ rockets, dragons }) => {
  const [devices, setDevices] = useState(rockets as Devices)
  const [expanded, setExpanded] = useState({} as DeviceBasics)
  const [open, setOpen] = useState(false)

  const onCardClick = (id: string) => {
    const device = devices.find((device) => device.id === id)
    const getBasicDeviceInfo = (
      acc: DeviceBasics,
      key: keyof DeviceBasics
    ): DeviceBasics =>
      device!.hasOwnProperty(key) ? { ...acc, [key]: device![key] } : acc

    // To avoid passing props in individually to ExpandedInfo
    const deviceInfo = expandedInfoKeys.reduce<DeviceBasics>(
      getBasicDeviceInfo,
      {} as DeviceBasics
    )

    setExpanded(deviceInfo)
    setOpen(true)
  }

  return (
    <>
      <Row justify='center'>
        <Col>
          <Button onClick={() => setDevices(rockets)}>Rockets</Button>
        </Col>
        <Col>
          <Button onClick={() => setDevices(dragons)}>Dragons</Button>
        </Col>
      </Row>
      <Row justify='center'>
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
      <Drawer onClose={() => setOpen(false)} visible={open} placement='bottom'>
        <ExpandedInfo {...expanded} />
      </Drawer>
    </>
  )
}

export default ProductListPage
