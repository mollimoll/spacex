import React, { FC } from "react"
import { Card } from "antd"

const { Meta } = Card

type Props = {
  image: string
  name: string
  description: string
}

const CardComponent: FC<Props> = ({ image, name, description }) => (
  <Card
    hoverable
    style={{ width: 400, height: "100%" }}
    cover={
      <img
        alt='example'
        src={image}
        style={{ height: 300, objectFit: "cover" }}
      />
    }
  >
    <Meta title={name} description={description} />
  </Card>
)

export default CardComponent
