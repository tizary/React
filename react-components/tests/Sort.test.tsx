import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sort } from '../src/components/Sort/Sort';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import React from 'react';

describe('<Sort />', () => {
  test('sort field', () => {
    const wrapper = render(
      <Provider store={store}>
        <Sort />
      </Provider>
    );
    const option = wrapper.container.querySelector('option');
    expect(option?.textContent).toBe('Popularity');
  });
});
