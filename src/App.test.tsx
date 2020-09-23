import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import ProductListPage from "./components/ProductListPage"
import { rocketsDummy, dragonsDummy } from "./test/dummyData"

// hack required to make render work
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

test("<ProductListPage> should change devices list on menu click", () => {
  render(<ProductListPage rockets={rocketsDummy} dragons={dragonsDummy} />)

  // should display rocket card title
  expect(screen.queryByText("Falcon Heavy")).toBeVisible()
  expect(screen.queryByText("Dragon 1")).toBeNull()

  fireEvent.click(screen.getByTestId("dragons-menu"))
  expect(screen.queryByText("Falcon Heavy")).toBeNull()
  expect(screen.queryByText("Dragon 1")).toBeVisible()
})

test("<ProductListPage> should open drawer and display correct info on <Card> click", () => {
  render(<ProductListPage rockets={rocketsDummy} dragons={dragonsDummy} />)

  fireEvent.click(screen.getByTestId("card"))
  expect(screen.queryByText("Name")).toBeVisible()
  expect(screen.queryByText("Type")).toBeVisible()
  expect(screen.queryByText("Active Status")).toBeVisible()
  expect(screen.queryByText("First Flight")).toBeVisible()
  expect(screen.queryByText("2018-02-06")).toBeVisible()
  expect(screen.getByTestId("info-description")).toBeDefined()
  expect(screen.getByTestId("info-wiki")).toBeDefined()
})
