import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from '../src/components/Form/Form';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

describe('<Form />', () => {
  test('Form', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
