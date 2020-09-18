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
})