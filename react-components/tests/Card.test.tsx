import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from '../src/components/Card/Card';
import React from 'react';

describe('<Card />', () => {
  test('Card mounts properly', () => {
    const wrapper = render(
      <Card
        onHandlerCard={function (arg0: number): unknown {
          throw new Error('Function not implemented.');
        }}
        id={0}
        image={''}
        title={''}
        description={''}
        date={''}
        author={''}
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
