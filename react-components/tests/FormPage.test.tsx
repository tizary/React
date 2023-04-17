import { describe, test, expect } from 'vitest';
import { FormPage } from '../src/FormPage/FormPage';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

describe('<FormPage />', () => {
  test('FormPage mounts properly', () => {
    const wrapper = render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(wrapper).toBeTruthy();

    const h2 = wrapper.container.querySelector('h2');
    expect(h2?.textContent).toBe('Form');
  });
});
