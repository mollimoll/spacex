import React, { FC } from "react"
import { Divider, Statistic } from "antd"

import { Device } from "./types/Device"

const toTitleCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)

type Props = Device

const InfoSection: FC<Props> = ({
  active,
  description,
  first_flight,
  name,
  type,
  wikipedia,
}) => (
  <>
    <Statistic title='Name' value={name} />
    <Statistic title='Type' value={toTitleCase(type)} />
    <Statistic
      title='Active Status'
      value={toTitleCase(active ? "active" : "inactive")}
    />
    <Statistic title='First Flight' value={first_flight.toString()} />
    <Divider />
    <p data-testid='info-description'>{description}</p>
    <Divider />
    <p>
      <a href={wikipedia} data-testid='info-wiki'>
        Learn more on Wikipedia
      </a>
    </p>
  </>
)

export default InfoSection
