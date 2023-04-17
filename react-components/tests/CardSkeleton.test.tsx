import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import CardSkeleton from '../src/components/CardSkeleton/CardSkeleton';
import React from 'react';

describe('<CardSkeleton />', () => {
  test('CardSkeleton', () => {
    const wrapper = render(<CardSkeleton />);
    expect(wrapper).toBeTruthy();
  });
});
