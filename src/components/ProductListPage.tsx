import React, { FC, useState } from "react"
import { Button, Col, Row } from "antd"
import Card from "./Card"

type Rocket = any
type Dragons = any

type Props = {
  rockets: Rocket[]
  dragons: Dragons[]
}

const ProductListPage: FC<Props> = ({ rockets, dragons }) => {
  const [devices, setDevices] = useState(rockets)
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
          const { flickr_images, name, description } = device
          return (
            <Col>
              <Card
                image={flickr_images[0]}
                name={name}
                description={description}
              />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default ProductListPage
