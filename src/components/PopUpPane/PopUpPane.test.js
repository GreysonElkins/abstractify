import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' 
import '@testing-library/jest-dom'

import PopUpPane from './PopUpPane'

describe('About PopUpPane', () => {
  let mockHide, mockSaveSet

  beforeEach(() => {
    mockHide = jest.fn()
    mockSaveSet = jest.fn()
    render(
      <MemoryRouter>
        <PopUpPane 
          show='About' 
          hide={mockHide}
          save={mockSaveSet}
          isGaudy={true}
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
  let mockHide, mockSaveSet, input, save;
  beforeEach(() => {
    mockHide = jest.fn()
    mockSaveSet = jest.fn()
    render(
      <MemoryRouter>
        <PopUpPane 
          show='Save' 
          hide={mockHide}
          save={mockSaveSet}
          isGaudy={true}
        />
      </MemoryRouter>
    )
    input = screen.getByRole('textbox')
    save = screen.getByRole('button', { name: 'Save' })
  })

  it("should have a save heading", () => {
    const heading = screen.getByRole("heading", { name: "Save" });
    expect(heading).toBeInTheDocument();
  })

  it("should have two buttons", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  })

  it("should have a text input for a user's title", () => {
    expect(input).toBeInTheDocument()
  })

  it("should fire the close function when the 𝕏 button is clicked", () => {
    const x = screen.getByRole("button", { name: "𝕏" });
    fireEvent.click(x);
    expect(mockHide).toHaveBeenCalled();
  });

  it('should show a message if the user presses save while the input is empty',
    ()=>{
      fireEvent.click(save)
      const message = screen.getByText('You have to give the set a name!')
      expect(message).toBeInTheDocument()
    })
    
  it('should remove the message once a user enters input', () => {
    fireEvent.click(save)
    fireEvent.change(input, { target: { value: 'Testing out my input' }})
    const message = screen.queryByText('You have to give the set a name!')
    expect(message).not.toBeInTheDocument()
  })

  it('should show a users input', () => {
    fireEvent.change(input, { target: { value: 'Testing out my input' }})
    expect(input.value).toBe('Testing out my input')
  })
  
  it('should call the save function and close the window upon' + 
  ' clicking save with input filled', () => {
      fireEvent.change(input, { target: { value: 'Testing out my input' }})
      fireEvent.click(save)
      expect(mockSaveSet).toHaveBeenCalled()
      expect(mockHide).toHaveBeenCalled()
    })

})