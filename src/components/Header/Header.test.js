import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import Header from './Header'


describe ('Header', () => {
  let mockRefresh, mockToggle, mockGlitch, mockShow

  beforeEach(()=> {
    mockRefresh = jest.fn()
    mockToggle = jest.fn()
    mockGlitch = jest.fn()
    mockShow = jest.fn()
    render(
    <MemoryRouter>
      <Header 
        title={['A', 'B', 'S', 'T', 'R', 'A', 'C', 'T', 'I', 'F', 'Y']}
        toggleGaudy={mockToggle}
        refresh={mockRefresh}
        glitch={mockGlitch}
        isGaudy={true}
        page='/'
        showPopUp={mockShow}
      />
    </MemoryRouter>)
  }) 

  it ('should display the title of the application', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
  
  it('should render 3 buttons', () => {
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)    
  })
  
  it('should have 2 links', () => {
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
  })

  it('should have an input button', () => {
    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
  })

  it('should have a navigation section', () => {
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('should fire a function when refresh is clicked', () => {
    const button = screen.getByRole('button', { name: 'Refresh image set' })
    fireEvent.click(button)
    expect(mockRefresh).toHaveBeenCalled()
  })

  it('should try to show popup when about or save are clicked', () => {
    const about = screen.getByRole('button', { name: 'About Abstractify'})
    const save = screen.getByRole('button', { name: 'Save this image set'})
    fireEvent.click(about)
    expect(mockShow).toHaveBeenCalled()
    fireEvent.click(save)
    expect(mockShow).toHaveBeenCalledTimes(2)
  })
})

describe('Header on Your-Sets page', () => {
    let mockRefresh, mockToggle, mockGlitch, mockShow

  beforeEach(()=> {
    mockRefresh = jest.fn()
    mockToggle = jest.fn()
    mockGlitch = jest.fn()
    mockShow = jest.fn()
  })

  it.skip('should not display refresh or save buttons', () => {
  render(
    <MemoryRouter>
      <Header
        title={["A", "B", "S", "T", "R", "A", "C", "T", "I", "F", "Y"]}
        toggleGaudy={mockToggle}
        refresh={mockRefresh}
        glitch={mockGlitch}
        showPopUp={mockShow}
        isGaudy={true}
        page="/your-sets"
      />
    </MemoryRouter>
  ); 
  const about = screen.queryByRole ('button', { name: 'About Abstractify' })
  const save = screen.queryByRole ('button', { name: 'Save this image set' })
  expect(about).not.toBeInTheDocument()
  expect(save).not.toBeInTheDocument()
  })
})