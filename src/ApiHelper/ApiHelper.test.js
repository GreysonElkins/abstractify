import "@testing-library/jest-dom";
import { waitFor } from '@testing-library/react'
import { ApiKey } from './API_KEY'
import { getImages } from './ApiHelper'
import { apiResponse } from '../test-data/api-response'
import { response } from '../test-data/cleaned-response'

import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;


describe('API functions', () => {
  let header, mockResponse

  beforeEach(() => {
    mockResponse = {
      ok: true,
      json: () => {
        return apiResponse
      }
    }
    global.fetch = jest.fn()
    header = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: ApiKey,
      }
    }
    global.fetch.mockResolvedValue(mockResponse)
  })
  
  it('should be able to invoke a fetch call', async () => {
    getImages()
    await waitFor(() =>
    expect(fetch).toHaveBeenCalled(),
    expect(fetch).toHaveBeenCalledWith(
      'https://api.pexels.com/v1/search?per_page=80&query=abstract+landscape+urban', header))
    })
    
    it('if the first response is successful, ' + 
    'the second response should call a new endpoint', async () => {
      getImages()
      getImages()
      await waitFor(() => {
        expect(fetch).toHaveBeenNthCalledWith(
          2,
          "https://api.pexels.com/v1/search/?page=2&per_page=80&query=abstract+landscape+urban",
          header
          );
        })
      })
      
  it('should return cleaned data from a successful response', async () => {
    const result = await getImages()
    expect(result).toEqual([response[0], response[1]])
  })

  it(`should return an error if the response isn't ok`, async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: () => {
        return "this isn't a thing"
      },
      status: 'I WAS BAD'
    })
    const badResult = await getImages()
    expect(badResult).toEqual('Something went wrong while getting the images, error: I WAS BAD')
  })
})
