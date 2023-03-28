import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../src/components/Search/Search';

describe('<Search />', () => {
  test('Form', () => {
    render(<Search search={''} />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
  test('Placeholder', () => {
    render(<Search search={''} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  test('Button search', () => {
    render(<Search search={''} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
