import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { NotFound } from '../src/NotFound/NotFound';
import React from 'react';

describe('<NotFound />', () => {
  test('NotFound mounts properly', () => {
    const wrapper = render(<NotFound />);
    expect(wrapper).toBeTruthy();

    const h2 = wrapper.container.querySelector('h2');
    expect(h2?.textContent).toBe('Page not found');
  });
});
