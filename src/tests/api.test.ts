// src/api/api.test.ts

import sinon from 'sinon';
import type { Brewery } from '../types/brewery';
import { fetchBreweries, fetchBreweryById } from '../api/api.ts';
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('API: Brewery functions', () => {
  let fetchStub: sinon.SinonStub;

  beforeEach(() => {
    // restore any previous stubs:
    sinon.restore();
  });

  it('fetchBreweries should return an array of breweries on success', async () => {
    // Arrange
    const mockBreweries: Brewery[] = [
        {
          id: '1',
          name: 'Brew One',
          brewery_type: 'micro',
          address_1: '123 Main St',
          address_2: null,
          address_3: null,
          city: 'Portland',
          state_province: 'Oregon',
          postal_code: '97201',
          country: 'United States',
          longitude: -122.6765,
          latitude: 45.5152,
          phone: '503-555-0123',
          website_url: 'https://brewone.com',
          state: 'Oregon',
          street: '123 Main St'
        },
        {
          id: '2',
          name: 'Brew Two',
          brewery_type: 'nano',
          address_1: '456 Oak Ave',
          address_2: null,
          address_3: null,
          city: 'Seattle',
          state_province: 'Washington',
          postal_code: '98101',
          country: 'United States',
          longitude: -122.3321,
          latitude: 47.6062,
          phone: '206-555-0456',
          website_url: 'https://brewtwo.com',
          state: 'Washington',
          street: '456 Oak Ave'
        }
      ];
    // stub global fetch to resolve with a Response-like object:
    fetchStub = sinon.stub(globalThis, 'fetch').resolves({
      ok: true,
      json: async () => mockBreweries
    } as any);

    // Act
    const result = await fetchBreweries();

    // Assert
    expect(fetchStub.calledOnce).to.be.true;
    expect(result).to.deep.equal(mockBreweries);
  });

  it('fetchBreweries should throw an error when response is not ok', async () => {
    sinon.stub(globalThis, 'fetch').resolves({
      ok: false,
      status: 500
    } as any);

    await expect(fetchBreweries()).to.be.rejectedWith('Failed to fetch breweries');
  });

  it('fetchBreweryById should return a brewery object on success', async () => {
    const mockBrewery: Brewery = {
        id: '1',
        name: 'Brew One',
        brewery_type: 'micro',
        address_1: '123 Main St',
        address_2: null,
        address_3: null,
        city: 'Portland',
        state_province: 'Oregon',
        postal_code: '97201',
        country: 'United States',
        longitude: -122.6765,
        latitude: 45.5152,
        phone: '503-555-0123',
        website_url: 'https://brewone.com',
        state: 'Oregon',
        street: '123 Main St'
      };
    
      sinon.stub(globalThis, 'fetch').resolves({
      ok: true,
      json: async () => mockBrewery
    } as any);

    const result = await fetchBreweryById('1');
    expect(result).to.deep.equal(mockBrewery);
  });

  it('fetchBreweryById should throw an error when response is not ok', async () => {
    sinon.stub(globalThis, 'fetch').resolves({
      ok: false,
      status: 404
    } as any);

    await expect(fetchBreweryById('999')).to.be.rejectedWith('Failed to fetch brewery');
  });
});