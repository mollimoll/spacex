import { DeviceBasics } from "./Device"

export interface Dragon extends DeviceBasics {
  crew_capacity: number
  diameter: Diameter
  dry_mass_kg: number
  dry_mass_lb: number
  heat_shield: HeatShield
  height_w_trunk: Height
  launch_payload_mass: PayloadMass
  launch_payload_vol: Vol
  orbit_duration_yr: number
  pressurized_capsule: PressurizedCapsule
  return_payload_mass: PayloadMass
  return_payload_vol: Vol
  sidewall_angle_deg: number
  thrusters: Thruster[]
  trunk: Trunk
}

export interface Thruster {
  type: string
  amount: number
  pods: number
  fuel_1: string
  fuel_2: string
  isp: number
  thrust: Thrust
}

export interface Thrust {
  kN: number
  lbf: number
}

export interface Height {
  meters: number
  feet: number
}

export interface Diameter {
  meters: number
  feet: number
}

export interface HeatShield {
  material: string
  size_meters: number
  temp_degrees: number
  dev_partner: string
}

export interface PayloadMass {
  kg: number
  lb: number
}

export interface Vol {
  cubic_meters: number
  cubic_feet: number
}

export interface PressurizedCapsule {
  payload_volume: Vol
}

export interface Trunk {
  trunk_volume: Vol
  cargo: Cargo
}

export interface Cargo {
  solar_array: number
  unpressurized_cargo: boolean
}
