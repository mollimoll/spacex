import React, { FC } from "react"
import { Carousel, Col, Row } from "antd"
import { Device } from "./types/Device"
import InfoSection from "./InfoSection"

type Props = Device

const ExpandedInfo: FC<Props> = (props) => {
  const { flickr_images } = props
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={0} lg={2} xl={4} />
        <Col sm={14} md={16} lg={12} xl={10}>
          <Carousel autoplay dotPosition={"right"} style={{ width: "100%" }}>
            {flickr_images.map((imgUrl) => (
              <div>
                <img
                  style={{ height: 400, width: "100%", objectFit: "contain" }}
                  alt=''
                  src={imgUrl}
                />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col sm={10} md={8} lg={8}>
          <InfoSection {...props} />
        </Col>
        <Col xs={0} lg={2} xl={4} />
      </Row>
      <Row>
        <Col span={24}></Col>
      </Row>
    </>
  )
}

export default ExpandedInfo
