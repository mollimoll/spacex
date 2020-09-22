import React, { FC } from "react"
import { Col, Row, Statistic } from "antd"
import { DeviceBasics } from "./types/Device"

type Props = DeviceBasics

const ExpandedInfo: FC<Props> = ({
  active,
  description,
  first_flight,
  name,
  type,
  wikipedia,
}) => (
  <>
    <Row>
      <Col span={12}>
        <Statistic title='Name' value={name} />
        <Statistic title='Type' value={type} />
        <Statistic
          title='Active Status'
          value={active ? "active" : "inactive"}
        />
        <Statistic title='First Flight' value={first_flight.toString()} />
      </Col>
      <Col span={12}>{description}</Col>
    </Row>
    <Row>
      <Col>
        <a href={wikipedia}>Learn more on Wikipedia</a>
      </Col>
    </Row>
  </>
)

export default ExpandedInfo
