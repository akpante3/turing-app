import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

const initialState = {
  categories: { categories: [] },
  products: { products: [] },
};
const mockStore = configureStore();
let wrapper;
let store;

describe('test for ShoppingCartModal', () => {
  it('test for ShoppingCartModal', () => {
    store = mockStore(initialState);
    wrapper = shallow(<LandingPage store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
