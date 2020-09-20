import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import savedSet from '../../../../test-data/saved-sets'
import UserPage from './UserPage'

describe('User page (your sets)', () => {
  it('should display a card for each saved set', () => {
    render (
      <MemoryRouter>
        <UserPage imageSets={savedSet}></UserPage>
      </MemoryRouter>
    )
    const titleOne = screen.getByRole('heading', {name: "Best pictures I've ever seen"})
    const titleTwo = screen.getByRole('heading', {name: "Drool-worthy"})
    expect(titleOne).toBeInTheDocument()
    expect(titleTwo).toBeInTheDocument()
  })
})