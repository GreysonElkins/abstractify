import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import {response} from '../../../../test-data/cleaned-response'
import MainPage from './MainPage'

describe('MainPage', () => {
  let images

  beforeEach(() => {
    images = response
    images[0].seen = true

    render (
      <MemoryRouter>
        <MainPage 
          images={images}
          toggleImageLock={jest.fn}
        />
      </MemoryRouter>
    )
  })

  it('should render twenty of the images provided to the page', () => {
    const renderedImages = screen.getAllByRole('img')
    expect(renderedImages).toHaveLength(20)
  })

  it('should not render images that have been seen', () => {
    const missingImg = screen.queryByAltText("Photographed by Jeffrey Czum")
    expect(missingImg).not.toBeInTheDocument() 
  })

})