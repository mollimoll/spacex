import React, { FC } from "react"
import { Card, Col } from "antd"

const { Meta } = Card

type Props = {
  id: string
  image: string
  name: string
  description: string
  onClick: (id: string) => void
}

const DeviceCard: FC<Props> = ({ id, image, name, description, onClick }) => {
  return (
    <Col>
      <Card
        data-testid='card'
        onClick={() => onClick(id)}
        hoverable
        style={{ maxWidth: 400, height: "100%" }}
        cover={
          <img alt='' src={image} style={{ height: 300, objectFit: "cover" }} />
        }
      >
        <Meta title={name} description={description} />
      </Card>
    </Col>
  )
}

export default DeviceCard
