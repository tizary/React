import { describe, test, expect } from 'vitest';
import { FormPage } from '../src/FormPage/FormPage';
import { render } from '@testing-library/react';
import React from 'react';

describe('<FormPage />', () => {
  test('FormPage mounts properly', () => {
    const wrapper = render(<FormPage />);
    expect(wrapper).toBeTruthy();

    const h2 = wrapper.container.querySelector('h2');
    expect(h2?.textContent).toBe('Form');
  });
});
