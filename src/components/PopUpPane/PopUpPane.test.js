import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' 
import '@testing-library/jest-dom'

import PopUpPane from './PopUpPane'
let mockHide, mockSaveSet

describe('About PopUpPane', () => {
  beforeEach(() => {
    mockHide = jest.fn()
    mockSaveSet = jest.fn()
    render(
      <MemoryRouter>
        <PopUpPane 
          show='About' 
          hide={mockHide}
          save={mockSaveSet}
        />
      </MemoryRouter>
    )
  })

  it('should have an about heading', () => {
    const heading = screen.getByRole('heading', { name: 'About' })
    expect(heading).toBeInTheDocument()
  })

  it('should have two buttons', () => {
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('should have a close CTA button', () => {
    const cta = screen.getByRole('button', {name: 'Close'})
    expect(cta).toBeInTheDocument()
  })

  it('should fire the hide function when the cta is clicked', () => {
    const cta = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(cta)
    expect(mockHide).toHaveBeenCalled()
  })

  it('should fire the close function when the 𝕏 button is clicked', () => {
    const x = screen.getByRole('button', { name: '𝕏'})
    fireEvent.click(x)
    expect(mockHide).toHaveBeenCalled()
  })
})

describe('Save PopUpPane', () => {
  beforeEach(() => {
    mockHide = jest.fn()
    mockSaveSet = jest.fn()
    render(
      <MemoryRouter>
        <PopUpPane 
          show='Save' 
          hide={mockHide}
          save={mockSaveSet}
        />
      </MemoryRouter>
    )
  })

  it("should have a save heading", () => {
    const heading = screen.getByRole("heading", { name: "Save" });
    expect(heading).toBeInTheDocument();
  })

  it("should have two buttons", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  })

  it("should fire the close function when the 𝕏 button is clicked", () => {
    const x = screen.getByRole("button", { name: "𝕏" });
    fireEvent.click(x);
    expect(mockHide).toHaveBeenCalled();
  });
})