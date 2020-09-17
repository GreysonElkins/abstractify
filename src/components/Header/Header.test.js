import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import Header from './Header'


describe ('Header', () => {
  
  beforeEach(()=> {
    render(<MemoryRouter><Header /></MemoryRouter>)
  }) 

  it ('should display the title of the application', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it ("'s title should be changing onload, and appear later", () => {
    const title = screen.queryByText('ABSTRACTIFY')
    expect(title).not.toBeInTheDocument()
    setTimeout(() => {
      expect(title).toBeInTheDocument()
    }, 3000)
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
})