import { describe, test, expect } from 'vitest';
import { About } from '../src/About/About';
import { render } from '@testing-library/react';
import React from 'react';

describe('<About />', () => {
  test('About mounts properly', () => {
    const wrapper = render(<About />);
    expect(wrapper).toBeTruthy();

    const h2 = wrapper.container.querySelector('h2');
    expect(h2?.textContent).toBe('About');
  });
});
