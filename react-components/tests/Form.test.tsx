import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../src/components/Form/Form';
import React from 'react';

describe('<Form />', () => {
  test('Form', () => {
    render(<Form />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
