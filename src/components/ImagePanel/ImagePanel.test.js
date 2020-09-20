import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import ImagePanel from './ImagePanel'
import { response } from '../../test-data/cleaned-response'

describe('Image Panel', () => {
  let mockLock, image; 

  beforeEach(()=>{
    mockLock = jest.fn()
    render(
      <MemoryRouter>
        <ImagePanel image={response[0]} toggleImageLock={mockLock}/>
      </MemoryRouter>
    )
    image = screen.getByRole('img')
  })

    it('should contain an image', () => {
      expect(image).toBeInTheDocument()
    })

    it('should fire a function when clicked', () => {
      fireEvent.click(image)
      expect(mockLock).toHaveBeenCalled()  
    })
})