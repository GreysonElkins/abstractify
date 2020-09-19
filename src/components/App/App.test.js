import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import App from './App';
import { getImages } from '../../ApiHelper/ApiHelper';
import { response } from '../../test-data/fetch-response'
jest.mock('../../ApiHelper/ApiHelper.js')

describe('App', () => {

  let refreshButton

  beforeEach(() => {
    getImages.mockResolvedValueOnce(response)
    render(<MemoryRouter><App /></MemoryRouter>)
    refreshButton = screen.getByRole('button', { name: "Refresh image set" })
  })
 
  describe('on start', () => {
    it("'s title should be changing onload, and appear later", () => {
      const title = screen.queryByText("ABSTRACTIFY");
      expect(title).not.toBeInTheDocument();
      setTimeout(() => {
        expect(title).toBeInTheDocument();
      }, 3000);
    });
  
  
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
  
    it.skip('should fetch images on load', () => {
      expect(getImages).toHaveBeenCalled()
    })
  })

  describe('refresh images functionality', () => {
    it('should load different images when refresh has been clicked', () => {
      const imageOne = document.querySelector('img')
      fireEvent.click(refreshButton)
      const imageTwo = document.querySelector('img')
      expect(imageOne.id).not.toEqual(imageTwo.id)
    })
    
    it('should not replace locked images when refresh is clicked', () => {
      const imageOne = document.querySelector('img')
      const sameImageButDom = screen.getByAltText("Photographed by Josh Fields");
      fireEvent.click(sameImageButDom)
      fireEvent.click(refreshButton)
      const imageTwo = document.querySelector('img')
      expect(imageOne).toEqual(imageTwo)
    })
  
    it("should replace locked images on refresh after they're unlocked", () => {
      const imageOne = document.querySelector("img");
      const sameImageButDom = screen.getByAltText(
        "Photographed by Josh Fields"
      );
      fireEvent.click(sameImageButDom);
      fireEvent.click(refreshButton);
      fireEvent.click(refreshButton);
      const imageTwo = document.querySelector("img");
      expect(imageOne).not.toEqual(imageTwo);
    })
  
    it('should fetch on refresh click if there are no more unseen', () => {
      fireEvent.click(refreshButton)
      fireEvent.click(refreshButton)
      fireEvent.click(refreshButton)
      fireEvent.click(refreshButton)
      expect(getImages).toHaveBeenCalled()
    })
  })

  describe('About and Save modules', () => {
    
    it('should render an about section when about is clicked', () => {
      const aboutButton = screen.getByRole('button', { 
        name: 'About Abstractify' 
      })
      fireEvent.click(aboutButton)
      const aboutSectionHeader = screen.queryByRole('heading', { name: 'About' })
      expect(aboutSectionHeader).toBeInTheDocument()
    })
    
    it('should remove the about section when close or 𝕏 are clicked', () => {
      const aboutButton = screen.getByRole('button', { 
        name: 'About Abstractify' 
      })
      fireEvent.click(aboutButton)
      const x = screen.getByRole('button', { name: '𝕏' })
      fireEvent.click(x)
      const aboutSectionHeader = screen.queryByRole('heading', { name: 'About' })
      expect(aboutSectionHeader).not.toBeInTheDocument()
      
      fireEvent.click(aboutButton)
      const close = screen.queryByRole('button', { name: 'Close' })
      fireEvent.click(close)
      const aboutSectionHeaderTwo = screen.queryByRole('heading', { name: 'About' })
      expect(aboutSectionHeaderTwo).not.toBeInTheDocument()
    })

    it('should render a save prompt when save is clicked', () => {
      const saveButton = screen.getByRole('button', { 
        name: 'Save this image set' 
      })
      fireEvent.click(saveButton)
      const saveHeader = screen.queryByRole('heading', { name: 'Save' })
      expect(saveHeader).toBeInTheDocument()
    })
  })
})