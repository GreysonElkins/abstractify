import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import App from './App';
import { getImages } from '../../ApiHelper/ApiHelper';
import { response } from '../../test-data/fetch-response'
jest.mock('../../ApiHelper/ApiHelper.js')

describe('App', () => {

  beforeEach(() => {
    getImages.mockResolvedValueOnce(response)
    render(<MemoryRouter><App /></MemoryRouter>)
  })

  it('should have a main section', () => {
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })

  it('should render the Header', () => {
    const header = screen.getByRole('heading')
    expect(header).toBeInTheDocument()
  })

  it('should render the MainPage on load', () => {
    const imgs = screen.getAllByRole('img')
    expect(imgs).not.toHaveLength(0)
  })

  it('should fetch images on load', () => {
    expect(getImages).toHaveBeenCalled()
  })

  it('should fetch data when the refresh button is clicked', () => {
    const button = screen.getByRole('button', { name: "Refresh image set" })
    fireEvent.click(button)
    expect(getImages).toHaveBeenCalledTimes(1)
  })
})