import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Modal from '../src/components/Modal/Modal';
import React from 'react';

describe('<Modal />', () => {
  test('App mounts properly', () => {
    const wrapper = render(
      <Modal
        active={false}
        setActive={function (arg0: boolean): void {
          throw new Error('Function not implemented.');
        }}
        image={''}
        title={''}
        description={''}
        date={''}
        author={''}
        content={''}
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
