import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import savedSets from '../../test-data/saved-sets'
import SavedSetCard from './SavedSetCard'

describe('Saved set card', () => {

  beforeEach(() => {
    render(
      <MemoryRouter>
        <SavedSetCard set={savedSets[0]} />
      </MemoryRouter>
    )
  })

  it('should display the title of the set', () => {
    const title = screen.getByRole('heading', { name: "Best pictures I've ever seen"})
    expect(title).toBeInTheDocument()
  })

  it('Should display the date the set was created', () => {
    const date = screen.getByText('Saved on Sep 19 2020')
    expect(date).toBeInTheDocument()
  })
})