import { Rocket } from "./Rocket"
import { Dragon } from "./Dragon"

export type Device = Rocket | Dragon

export interface DeviceBasics {
  id: string
  active: boolean
  description: string
  first_flight: Date
  flickr_images: string[]
  name: string
  type: string
  wikipedia: string
}
