import { DeviceBasics } from "./Device"

export interface Rocket extends DeviceBasics {
  boosters: number
  company: string
  cost_per_launch: number
  country: string
  diameter: Diameter
  engines: Engines
  first_stage: FirstStage
  height: Height
  landing_legs: LandingLegs
  mass: Mass
  payload_weights: PayloadWeight[]
  second_stage: SecondStage
  stages: number
  success_rate_pct: number
}

export interface Height {
  meters: number
  feet: number
}

export interface Diameter {
  meters: number
  feet: number
}

export interface Engines {
  isp: ISP
  thrust_sea_level: Thrust
  thrust_vacuum: Thrust
  number: number
  type: string
  version: string
  layout: string
  engine_loss_max: number
  propellant_1: string
  propellant_2: string
  thrust_to_weight: number
}

export interface ISP {
  sea_level: number
  vacuum: number
}

export interface Thrust {
  kN: number
  lbf: number
}

export interface FirstStage {
  thrust_sea_level: Thrust
  thrust_vacuum: Thrust
  reusable: boolean
  engines: number
  fuel_amount_tons: number
  burn_time_sec: number
}

export interface LandingLegs {
  number: number
  material: string
}

export interface Mass {
  kg: number
  lb: number
}

export interface PayloadWeight {
  id: string
  name: string
  kg: number
  lb: number
}

export interface SecondStage {
  thrust: Thrust
  payloads: Payloads
  reusable: boolean
  engines: number
  fuel_amount_tons: number
  burn_time_sec: number
}

export interface Payloads {
  composite_fairing: CompositeFairing
  option_1: string
}

export interface CompositeFairing {
  height: Diameter
  diameter: Diameter
}
