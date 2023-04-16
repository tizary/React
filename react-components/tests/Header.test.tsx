import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../src/Header/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders the links', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText('Home')).toHaveAttribute('to', '/home');
    expect(screen.getByText('About')).toHaveAttribute('to', '/about');
    expect(screen.getByText('Form')).toHaveAttribute('to', '/form');
  });
});
